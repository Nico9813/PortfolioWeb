import React from 'react';
import { CustomNavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

import './App.css';

import Pentamino from './components/prueba.png'

const PRELLO = {
  titulo: "PRELLO",
  descripcion: "Aplicacion de administracion de proyectos con interfaz web",
  imagenes: require('./components/prueba.png'),
  tecnologias: ["Python", "React", "Docker", "Redis", "Mysql"],
  github: "https://github.com/Nico9813/Prello"
}

const CHAT = {
  titulo: "SIMPLE WEB CHAT",
  descripcion: "Chat y documento colaborativo entre varias personas ",
  imagenes: Pentamino,
  tecnologias: ["WebSockets", "Node", "React"],
  github: "https://github.com/Nico9813/Sala_chat.git"
}

const PENTAMINO = {
  titulo: "PENTAMINO MOBILE",
  descripcion: "Adaptacion mobile del juego de mesa PENTAMINO",
  imagenes: Pentamino,
  tecnologias: ["React-native", "Redux", "PanResponder"],
  github: "https://github.com/Nico9813/Pentamino"
}

function App() {
  return (
    <div>
      <CustomNavBar></CustomNavBar>
      <Header></Header>
      <Project proyecto={PRELLO} contador={0}></Project>
      <Project proyecto={CHAT} contador={1}></Project>
      <Project proyecto={PENTAMINO} contador={2}></Project>
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