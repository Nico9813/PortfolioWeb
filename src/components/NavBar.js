import React from 'react'
import logo from '../logo.svg';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink
} from 'reactstrap';

export function CustomNavBar() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <img src={logo} className="App-logo" alt="logo" />
                <NavbarBrand href="/">Nicolas Gomez</NavbarBrand>
                <Nav className="mr-auto" navbar>
                </Nav>
                <NavLink href="/components/">Github</NavLink>
                <NavLink href="/components/">Resume</NavLink>
            </Navbar>
        </div>
    );
}