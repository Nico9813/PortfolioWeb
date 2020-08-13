import React, { useState } from 'react'
import logo from '../logo.svg';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export function CustomNavBar() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <img src={logo} className="App-logo" alt="logo" />
                <NavbarBrand href="/">Nicolas Gomez</NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavLink href="/components/">Github</NavLink>
                    <NavLink href="/components/">Resume</NavLink>
                </Collapse>
            </Navbar>
        </div>
    );
}