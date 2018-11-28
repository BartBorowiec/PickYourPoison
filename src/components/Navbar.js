import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, MDBContainer, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

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
                                <NavLink to="/login">Log in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/signup">Sign up</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse></MDBContainer>
            </Navbar>
        );
    }
}

export default NavbarPage;