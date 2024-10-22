import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,   
 Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';   

import Info from './Components/Info/Info';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';   


// Creamos el contexto para compartir los datos del evento
export const cardsContext = createContext();

function App() {
  const [liveEvent, setLiveEvent] = useState({
    title: 'Desvelando los Secretos de ‘El Libro de las Estrellas',
    date: 'Fecha y Hora: 28 de octubre de 2024, a las 19:00 (hora local)',
    description: 'Únete a nosotros en este emocionante evento virtual mientras celebramos el lanzamiento de la última novela de la aclamada autora, Julia Martínez. “El Libro de las Estrellas” es una historia mágica que nos transporta a un mundo lleno de enigmas, personajes inolvidables y aventuras interdimensionales.'
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/info" element={
          <cardsContext.Provider value={liveEvent}>
            <Info />
          </cardsContext.Provider>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;