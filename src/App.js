import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

import './App.css';

const proyectoPrueba = {
  titulo: "PRELLO",
  descripcion: "Descripcion muy muy completa",
  image: "https://es.wikipedia.org/wiki/Imagen#/media/Archivo:Image_created_with_a_mobile_phone.png",
  tecnologias: ["Python","React","Docker","Redis","Mysql"],
  github: "https://github.com/Nico9813/Prello"
}

function App() {
  return (
    <div>
      <CustomNavBar></CustomNavBar>
      <Header></Header>
      <Project proyecto={proyectoPrueba} contador={0}></Project>
      <Project proyecto={proyectoPrueba} contador={1}></Project>
      <Project proyecto={proyectoPrueba} contador={2}></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/