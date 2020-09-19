import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

import './App.css';

import * as Perfil from './perfil.json'

function App() {
  return (
    <div>
      <CustomNavBar></CustomNavBar>
      <Header foto={Perfil.foto} about={Perfil.about}></Header>
      {Perfil.proyectos.map( (proyecto, index) => {
        return(
          <Project proyecto={proyecto} contador={index}></Project>
        )
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;