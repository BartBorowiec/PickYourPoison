import React from "react";
import {Jumbotron} from "mdbreact";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            string: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.firstElementChild.value = "";
        if(typeof(this.props.passQueryString) === 'function') {
            this.props.passQueryString(this.state.string);
        }
    }
    handleInputChange = (e) => {
        this.setState({
            string: e.currentTarget.value
        })
    }

    render() {
        return (
            <Jumbotron>
                <h1 className="h1-responsive">Pick Your Poison</h1>
                <p className="lead">What do you want to drink tonight?</p>
                <hr className="my-2"/>
                <form onSubmit={this.handleSubmit}>
                    <input type={"text"} onChange={this.handleInputChange}/>
                    <button>Give me a drink!</button>
                </form>
            </Jumbotron>
        )
    }
}

export default Header;