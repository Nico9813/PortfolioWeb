import React from 'react'
import logo from '../logo.svg';

import * as Perfil from '../perfil.json'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink
} from 'reactstrap';

export function CustomNavBar() {
    return (
        <div>
            <Navbar ficolor="light" light expand="md">
                <img src={logo} className="App-logo" alt="logo" />
                <NavbarBrand href="/">{Perfil.nombre}</NavbarBrand>
                <Nav className="mr-auto" navbar>
                </Nav>
                
                <NavLink href={Perfil.github}>Github</NavLink>
                <NavLink href={Perfil.cv}>Resume</NavLink>
            </Navbar>
        </div>
    );
}