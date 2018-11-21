import React from "react";
import {Jumbotron, Button} from "mdbreact";


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
            <Jumbotron color="indigo" style={{
                padding: "40px",
                textAlign: "center",
                background:"url(jumbobg.png)",
                backgroundSize: "100% auto"
            }}>
                <img src={"pickyourpoison.png"} alt={"header-logo"}/>
                <p className="lead">What do you want to drink tonight?</p>
                <hr className="my-2"/>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder={"Enter ingredient"} type={"text"} onChange={this.handleInputChange}/>
                    <Button>Give me a drink!</Button>
                </form>
            </Jumbotron>
        )
    }
}

export default Header;