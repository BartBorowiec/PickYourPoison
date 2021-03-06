import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImage, CardTitle, MDBCol } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import NotInStock from "./NotInStock";


class DrinkCard extends React.Component {
    constructor(props){
        super(props);

        this.state={
            isFavourite: this.props.isFavourite
        }
    }
    addFavourite = (drinkId) => {
        const newDrinkKey = firebase.database().ref().child('favourites').push().key;
        const userID = firebase.auth().currentUser.uid;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        let updates = {};
        updates['/user/' + userID + '/favourites/' + newDrinkKey] = drinkId;
        return firebase.database().ref().update(updates);
    }

    removeFavourite = (drinkId) => {
        const userID = firebase.auth().currentUser.uid;
        const dbRef = firebase.database().ref().child('/user/'+userID+'/favourites');


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
        updates['/user/' + userID + '/favourites/' + drinkKey] = null;
        return firebase.database().ref().update(updates);

    }
    handleFavClick = () => {

        if(this.state.isFavourite){
            this.removeFavourite(this.props.id)
        } else {
            this.addFavourite(this.props.id)
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

                        {firebase.auth().currentUser && this.state.isFavourite && <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer", color: "#E74C3C"}} size="2x" icon={fasHeart}/>}
                        {firebase.auth().currentUser && !this.state.isFavourite && <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer"}} size="2x" icon={farHeart}/>}
                        {!firebase.auth().currentUser && null}

                        <Link className="btn" style={{backgroundColor: "#8EBB88"}}
                              to={`/drink/${this.props.id}`}>Recipe</Link>

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
        const userID = firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
        if (userID) {
            const favourites = firebase.database().ref().child('user/'+userID+'/favourites');
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
    }

    render() {
        if (!this.props.drinks && this.props.isSubmitted){
            return (
                <NotInStock/>
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