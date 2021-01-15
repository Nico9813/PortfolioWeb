import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

import './App.css';

import * as Perfil from './perfil.json'

document.title = "Nicolas Gomez | Portfolio"

function App() {
  return (
      <div class="App">
        <CustomNavBar foto={Perfil.foto}></CustomNavBar>
        {Perfil.proyectos.map((proyecto, index) => {
          return (
            <Project proyecto={proyecto} contador={index}></Project>
          )
        })}
        <Footer></Footer>
      </div>
  );
}

export default App;