import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImage, CardTitle, MDBCol, CardText } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase";


class DrinkCard extends React.Component {
    constructor(props){
        super(props);

        this.state={
            isFavourite: this.props.isFavourite
        }
    }
    addNewFavourite = (drinkId) => {

        // Get a key for a new Post.
        const newDrinkKey = firebase.database().ref().child('favourites').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        let updates = {};
        updates['/user/favourites/' + newDrinkKey] = drinkId;
        return firebase.database().ref().update(updates);
    }

    removeFavourite = (drinkId) => {

        const dbRef = firebase.database().ref().child('/user/favourites');

        let drinkKey = "";

        dbRef.on('value', snap => {
            const entries = Object.entries(snap.val());
            for(let i=0; i<entries.length; i++) {
                if (entries[i][1] === drinkId){
                    drinkKey = entries[i][0]
                }
            }
        })


        let updates = {};
        updates['/user/favourites/' + drinkKey] = null;
        return firebase.database().ref().update(updates);

    }
    handleFavClick = () => {

        if(this.state.isFavourite){
            this.removeFavourite(this.props.id)
        } else {
            this.addNewFavourite(this.props.id)
        }
        this.setState({
            isFavourite: !this.state.isFavourite
        })
    }

    render() {
        return (
            <MDBCol size="4">
                <Card className={"mt-3 mb-3"}>
                    <CardImage
                        className="img-fluid"
                        src={this.props.img}
                        waves
                    />
                    <CardBody className="text-center">
                        <CardTitle>{this.props.title}</CardTitle>
                        {this.state.isFavourite ? <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer", color: "#E74C3C"}} size="2x" icon={fasHeart}/>
                            : <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer"}} size="2x" icon={farHeart}/>}
                        <Link className="btn" style={{backgroundColor: "#8EBB88"}}
                              to={`/${this.props.id}`}>Recipe</Link>
                    </CardBody>
                </Card>
            </MDBCol>
        )
    }
}

class DrinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: []
        }
    }

    componentDidMount() {
        const favourites = firebase.database().ref().child('user/favourites');
        if(favourites) {
            favourites.on('value', snap => {
                if(snap.val()){
                    this.setState({
                        favourites: Object.values(snap.val())
                    })
                }

            })
        }
    }

    render() {
        if (!this.props.drinks && this.props.isSubmitted){
            return (
                <MDBCol  size="12">
                    <Card className={"mt-3 mb-3"} style={{ width: "60%", margin: "0 auto" }}>
                        <CardImage
                            className="img-fluid"
                            src={"sadbartender.jpg"}
                            waves
                        />
                        <CardBody className="text-center">
                            <CardTitle>Not in stock</CardTitle>

                            <CardText>
                                Sorry, we've ran out of ingredients! Maybe try something else?
                            </CardText>
                        </CardBody>
                    </Card>
                </MDBCol>
            )
        }


        if (!this.props.isSubmitted) return null;


        return(
            <>
                {this.props.drinks.map((drink,i) => {
                    return <DrinkCard key={i} title={drink.strDrink} id={drink.idDrink} img={drink.strDrinkThumb} isFavourite={this.state.favourites.includes(drink.idDrink)}/>
                })}
            </>
        )
    }
}

class Results extends React.Component {
    render(){
        return <DrinksList drinks={this.props.drinks} isSubmitted={this.props.isSubmitted}/>;
    }

}

export default Results;