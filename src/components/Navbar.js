import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, FormInline } from "mdbreact";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (

            <Navbar color="green" dark expand="md">
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
                    <NavbarNav middle={"true"}>
                        <NavItem>
                            <FormInline waves>
                                <div className="md-form my-0">
                                    <input
                                        id="filterInput"
                                        className="form-control mr-sm-2"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                            </FormInline>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;