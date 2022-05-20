import React from 'react'
import Contatos from '../components/Contatos'
import Created from '../components/Created'
import Header from '../components/Header'




export default function ContatoPage () {
  return (
    <div >
      <div className='bg-gray-800 h-850'>
        < Header
          appsFrontEnd="Apps Front-end"
          appsBackEnd="Apps Back-end"
          tecnologias="Tecnologias"
          homePage="Home Page"
        />
        <Contatos/>
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
