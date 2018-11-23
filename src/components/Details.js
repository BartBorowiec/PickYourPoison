import React from "react";
import axios from "axios";
import NotFound from "./NotFound";
import Loader from "./Loader";
import {MDBContainer, MDBRow, MDBCol, MDBCard} from "mdbreact";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import firebase from "firebase";
import {faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons";


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: null,
            isLoaded: false,
            isFavourite: false
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


    componentDidMount() {
        const dbRef = firebase.database().ref().child('/user/favourites');
        dbRef.on('value', snap => {
            if(snap.val()){
                this.setState({
                    isFavourite: Object.values(snap.val()).includes(this.props.match.params.id)
                })
            }
        })
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    drink: res.data.drinks ? res.data.drinks[0] : null,
                    isLoaded: true
                })
            })
    }

    handleFavClick = () => {

        if(this.state.isFavourite){
            this.removeFavourite(this.props.match.params.id)
        } else {
            this.addNewFavourite(this.props.match.params.id)
        }
        this.setState({
            isFavourite: !this.state.isFavourite
        })
    }

    render(){

        if(this.state.drink){
            const ingredientsList = [];
            const drink = this.state.drink;
            let i=1;
            while(drink["strIngredient"+i]){
                ingredientsList.push(<li key={i}>{drink["strMeasure"+i]} {drink["strIngredient"+i]}</li>);
                i++;
            }
            return (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    height: "100vh",
                    width: "100vw"
                }}>
                    <MDBContainer>
                        <MDBCard style={{padding: "40px",
                            background:"url(jumbobg.png)",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <MDBRow>
                                <MDBCol size={"6"}>
                                    <img style={{width: "100%", height: "100%"}}src={drink.strDrinkThumb} alt=""/>
                                </MDBCol>
                                <MDBCol size={"4"} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <h2>{drink.strDrink}</h2>
                                    <ul>
                                        {ingredientsList}
                                    </ul>
                                    <p>
                                        {drink.strInstructions}
                                    </p>

                                    {this.state.isFavourite ? <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer", color: "#E74C3C"}} size="2x" icon={fasHeart}/>
                                        : <FontAwesomeIcon onClick={this.handleFavClick} style={{cursor: "pointer"}} size="2x" icon={farHeart}/>}
                                    <Link className="btn" style={{backgroundColor: "#8EBB88",width: "150px"}} to={'../'}>Go back</Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBContainer>
                </div>
            )
        } else if (!this.state.drink && this.state.isLoaded) {
            return <NotFound/>
        }
        return <Loader/>
    }
}
export default Details;