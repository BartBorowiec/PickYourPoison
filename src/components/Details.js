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
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: false
        })
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    drink: res.data.drinks ? res.data.drinks[0] : null,
                    isLoaded: true
                })
            })
    }

    handleFavourite = () => {

    }

    render(){
        const favourites = firebase.database().ref().child('user/favourites');
        let isFavourite = false;
        favourites.on('value', snap => isFavourite = snap.val().includes(this.props.match.params.id))
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

                                    {isFavourite ? <FontAwesomeIcon style={{cursor: "pointer", color: "#E74C3C"}} size="2x" icon={fasHeart}/>
                                        : <FontAwesomeIcon style={{cursor: "pointer"}} size="2x" icon={farHeart}/>}
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