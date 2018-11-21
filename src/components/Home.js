import React from 'react';
import Results from './Results';
import Header from './Header';
import {MDBContainer, MDBRow} from "mdbreact";
import axios from "axios";


class Home extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            drinks: []
        }
    }

    getIngredients = () => {
        let ingredients=[];
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            .then(res => {
                ingredients = res.data.drinks.map(el => el.strIngredient1)
            })
        this.setState({
            ingredients: ingredients
        })
    }

    getDrinks = (string) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`)
            .then(res => {
                this.setState({
                    drinks: res.data.drinks
                })
            })

    }
    render(){
        return (
            <div>
                <MDBContainer>
                    <Header passQueryString={this.getDrinks} callIngredients={this.getIngredients}/>
                    <MDBRow>
                        <Results drinks={this.state.drinks} />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Home;