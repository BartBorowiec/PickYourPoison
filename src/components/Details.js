import React from "react";
import axios from "axios";
import NotFound from "./NotFound";
import Loader from "./Loader";
import {MDBContainer, MDBRow, MDBCol, MDBCard} from "mdbreact";

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
    render(){

        if(this.state.drink){
            const ingredientsList = [];
            const drink = this.state.drink;
            let i=1;
            while(drink["strIngredient"+i]){
                console.log(drink["strIngredient"+i]);
                ingredientsList.push(<li>{drink["strMeasure"+i]} {drink["strIngredient"+i]}</li>);
                i++;
            }
            console.log(ingredientsList);
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
                                <MDBCol size={"6"}>
                                    <ul>
                                        {ingredientsList}
                                    </ul>
                                    <p>
                                        {drink.strInstructions}
                                    </p>
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