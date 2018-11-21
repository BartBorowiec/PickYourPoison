import React from 'react';
import axios from "axios";
import NotFound from "./NotFound";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: null,
            isResponse: false
        }
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    drink: res.data.drinks ? res.data.drinks[0] : null,
                    isResponse: true
                })
            })
    }
    render(){

        if(this.state.drink && this.state.isResponse){
            return (
                <div>
                    <img src={this.state.drink.strDrinkThumb} alt=""/>
                    <ul>
                        {this.state.drink.ingredients}
                    </ul>
                    <p>

                    </p>
                </div>
            )
        } else if (!this.state.drink && this.state.isResponse) {
            return <NotFound/>
        }
        return <h1>MIXING</h1>
    }
}
export default Details;