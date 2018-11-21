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
                    <Header passQueryString={this.getDrinks}/>
                    <MDBRow>
                        <Results drinks={this.state.drinks} />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Home;