import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import firebase from "firebase/app";
import 'firebase/auth';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: "",
            password: "",
            isSubmitted: false,
            error: ""
        }
    }
    handleInputChange = (e) => {
        this.setState({
            isSubmitted: false,
            error: "",
            [e.currentTarget.id]: e.currentTarget.value
        })
        console.log(e.currentTarget.id);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState ({
            isSubmitted: true
        })
        const {email, password} = this.state;
        if(email && password) {

            await firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
                this.setState({
                    error: error.message
                })
            });
            if (!this.state.error) {
                document.location.replace("/");
            }
        }
    }

    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol className={"signup"} md="6">
                        <form onSubmit={this.handleSubmit}>

                            <p className="h4 text-center mb-4">Log in</p>

                            <label htmlFor="email" className="grey-text">
                                Your email
                            </label>
                            <input
                                onChange={this.handleInputChange}
                                type="email"
                                id="email"
                                className="form-control"
                            />
                            { !this.state.email && this.state.isSubmitted ? <p>You must enter email</p> : null }
                            <br />

                            <label
                                htmlFor="password"
                                className="grey-text"
                            >
                                Your password
                            </label>
                            <input
                                onChange={this.handleInputChange}
                                type="password"
                                id="password"
                                className="form-control"
                            />
                            { !this.state.password && this.state.isSubmitted ? <p>You must enter a password</p> : null }
                            {this.state.error && <p>{this.state.error}</p>}
                            <div className="text-center mt-4">
                                <button className={"btn"} style={{backgroundColor: "#8EBB88"}} type="submit">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Login;