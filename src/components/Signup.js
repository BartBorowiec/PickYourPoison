import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            email: "",
            confirmEmail: "",
            password: "",
            isSubmitted: false
        }
    }
    handleInputChange = (e) => {
        this.setState({
            isSubmitted: false,
            [e.currentTarget.id]: e.currentTarget.value
        })
        console.log(e.currentTarget.id);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState ({
            isSubmitted: true
        })
    }

    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol className={"signup"} md="6">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="name" className="grey-text">
                                Your name
                            </label>
                            <input
                                onChange={this.handleInputChange}
                                type="text"
                                id="name"
                                className="form-control"
                            />
                            { !this.state.name && this.state.isSubmitted ? <p>You must enter username</p> : null }
                            <br />
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
                                htmlFor="confirmEmail"
                                className="grey-text"
                            >
                                Confirm your email
                            </label>
                            <input
                                onChange={this.handleInputChange}
                                type="email"
                                id="confirmEmail"
                                className="form-control"
                            />
                            { !(this.state.email === this.state.confirmEmail)  && this.state.isSubmitted ? <p>Different emails</p> : null }
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

                            <div className="text-center mt-4">
                                <button className={"btn"} style={{backgroundColor: "#8EBB88"}} type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Signup;