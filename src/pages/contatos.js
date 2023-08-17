import React from 'react'
import Contatos from '../components/Contatos'
import Created from '../components/Created'
import Header from '../components/Header'




export default function ContatoPage () {
  return (
    <div>
      <div className='bg-gray-800 h-850'>
        < Header
          appsFrontEnd="Front-end"
          appsBackEnd="Back-end"
          tecnologias="Tecnologias"
          homePage="Home Page"
        />
        <Contatos/>
        <Created/>
      </div>
    </div>
    
  )
}
