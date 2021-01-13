import React from 'react'

import * as Perfil from '../perfil.json'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink
} from 'reactstrap';

export const CustomNavBar = ({foto}) => {
    return (
        <Navbar className="nav-bar" ficolor="nigth" light expand="md">
            <NavbarBrand href="/">
                <div className="brand">
                    <img className="perfil" src={process.env.PUBLIC_URL + foto} alt="logo" />
                    <h4 className="titulo">
                        {Perfil.nombre}
                    </h4>
                </div>
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
            </Nav>
                
            <NavLink href={Perfil.github}>Github</NavLink>
            <NavLink href={process.env.PUBLIC_URL + Perfil.cv} target="_blank">CV</NavLink>
            <NavLink href={process.env.PUBLIC_URL + "/Pentamino.apk"} download>APK</NavLink>
        </Navbar>
    );
}