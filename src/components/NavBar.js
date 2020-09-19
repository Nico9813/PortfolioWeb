import React from 'react'
import logo from '../logo.svg';

import * as Perfil from '../perfil.json'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink
} from 'reactstrap';

export const CustomNavBar = () => {
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <Navbar ficolor="nigth" light expand="md">
                <NavbarBrand href="/">{Perfil.nombre}</NavbarBrand>
                <Nav className="mr-auto" navbar>
                </Nav>
                
                <NavLink href={Perfil.github}>Github</NavLink>
                <NavLink href={Perfil.cv}>Resume</NavLink>
            </Navbar>
        </div>
    );
}