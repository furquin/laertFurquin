import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BackEnd from '../pages/backEnd'
import FrontEnd from '../pages/frontEnd'
import HomePage from '../pages/homePage';
import Agradecimento from '../pages/agradecimento';
import Contatos from '../pages/contatos'
import Tecnologias from '../pages/tecnologias'




export default function index() {
  return (
    <div>
      <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/backEnd" element={<BackEnd/>} />
              <Route exact path="/frontEnd" element={<FrontEnd />} />
              <Route exact path="/agradecimento" element={<Agradecimento />} />
              <Route exact path="/contatos" element={<Contatos />} />        
              <Route exact path="/tecnologias" element={<Tecnologias />} />

      </Routes>
    </div>
  )
}
