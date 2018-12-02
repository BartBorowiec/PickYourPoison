import React from "react";
import { Navbar, MDBContainer, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";
import firebase from 'firebase/app';
import 'firebase/auth';

class NavbarPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            user: null
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user
                })
            } else {
                this.setState({
                    user: null
                })
            }
        });
    }

    handleLogout = () => {
        firebase.auth().signOut()
            .then(function() {
                document.location.replace("/")
            })
            .catch(function(error) {
                console.log(error)
            });
    }

    toggleCollapse = ()=> {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (

            <Navbar style={{backgroundColor: "#8EBB88"}} dark expand="md">
                <MDBContainer>
                    <NavbarBrand>
                        <strong className="white-text">PickYourPoison</strong>
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggleCollapse}
                    />

                    <Collapse
                        id="navbarCollapse3"
                        isOpen={this.state.isOpen}
                        navbar
                    >
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                {this.state.user && <NavLink to={`/user/${this.state.user.uid}`}>Hello, <strong>{this.state.user.displayName}</strong>!</NavLink>}
                            </NavItem>
                            <NavItem>
                                {this.state.user ? <NavLink to={""} onClick={this.handleLogout}>Log out</NavLink> : <NavLink to="/login">Log in</NavLink>}
                            </NavItem>
                            <NavItem>
                                {!this.state.user && <NavLink to="/signup">Sign up</NavLink>}
                            </NavItem>
                        </NavbarNav>
                    </Collapse></MDBContainer>
            </Navbar>
        );
    }
}

export default NavbarPage;