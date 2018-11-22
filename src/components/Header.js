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
            <Jumbotron style={{
                padding: "50px",
                textAlign: "center",
                background:"url(jumbobg.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
            }}>
                <img style={{width: "80%"}} src={"pickyourpoison.png"} alt={"Pick Your Poison"}/>
                <h1 className="lead">What do you want to drink tonight?</h1>
                <hr className="my-2"/>
                <form onSubmit={this.handleSubmit}>
                    <input style={{ fontSize: "24px", padding: "10px"}}placeholder={"Enter ingredient"} type={"text"} onChange={this.handleInputChange}/>
                    <input type={"submit"} value="Give me a drink!" className={"btn"} style={{
                        backgroundColor: "#8EBB88",
                        fontSize: "22px",
                        margin: 0,
                        verticalAlign: "top"
                    }}/>
                </form>
            </Jumbotron>
        )
    }
}

export default Header;