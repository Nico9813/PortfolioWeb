import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

import './App.css';

import * as Perfil from './perfil.json'

function App() {
  return (
    <div class="App">
      <CustomNavBar foto={Perfil.foto}></CustomNavBar>
      {Perfil.proyectos.map( (proyecto, index) => {
        return(
          <Project proyecto={proyecto} contador={index}></Project>
        )
      })}
    </div>
  );
}

export default App;