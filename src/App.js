import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Project } from './components/Project'

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
      </div>
  );
}

export default App;