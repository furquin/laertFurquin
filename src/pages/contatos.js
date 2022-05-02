import React from 'react'
import Contatos from '../components/Contatos'
import Created from '../components/Created'
import { Link } from 'react-router-dom'
import Header from '../components/Header'




export default function ContatoPage () {
  return (
    <div className="bg-black text-white">
      <div>
        < Header
          appsFrontEnd="Apps Front-end"
          appsBackEnd="Apps Back-end"
          tecnologias="Tecnologias"
          homePage="Home Page"
        />
        <Contatos />
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
