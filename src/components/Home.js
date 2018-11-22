import React from 'react';
import Results from './Results';
import Header from './Header';
import {MDBContainer, MDBRow} from "mdbreact";
import axios from "axios";


class Home extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            drinks: null,
            isSubmitted: false
        }
    }

    // getIngredients = () => {
    //     let ingredients=[];
    //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    //         .then(res => {
    //             ingredients = res.data.drinks.map(el => el.strIngredient1)
    //         })
    //     this.setState({
    //         ingredients: ingredients
    //     })
    // }

    getDrinks = (string) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`)
            .then(res => {
                this.setState({
                    drinks: res.data.drinks,
                    isSubmitted: true
                })
            }).then(()=> {
            window.scrollTo({left: "0", top:document.querySelector(".jumbotron").getBoundingClientRect().bottom, behavior: "smooth"})
        })

    }
    render(){
        return (
            <div>
                <MDBContainer>
                    <Header passQueryString={this.getDrinks} callIngredients={this.getIngredients}/>
                    <MDBRow>
                        <Results drinks={this.state.drinks} isSubmitted={this.state.isSubmitted}/>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Home;