import React from 'react';
import axios from "axios";
import NotFound from "./NotFound";


class Loader extends React.Component {
    render(){
        return (
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div className={"spinner"} style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid #ddd",
                    borderRight: "5px solid #333",
                    borderRadius: "50%",
                    animation: "spin .7s infinite linear"
                }}/>
            </div>
        )
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: null
        }
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    drink: res.data.drinks ? res.data.drinks[0] : null
                })
            })
    }
    render(){

        if(this.state.drink){
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
        } else if (!this.state.drink) {
            return <NotFound/>
        }
        return <Loader/>
    }
}
export default Details;