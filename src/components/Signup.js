import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


class Signup extends React.Component {

    handleSubmit = () => {

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
                                type="text"
                                id="name"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="email" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                            />
                            <br />
                            <label
                                htmlFor="confirmEmail"
                                className="grey-text"
                            >
                                Confirm your email
                            </label>
                            <input
                                type="email"
                                id="confirmEmail"
                                className="form-control"
                            />
                            <br />
                            <label
                                htmlFor="password"
                                className="grey-text"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                            />
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