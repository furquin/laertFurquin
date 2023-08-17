import React from 'react'
import Tecnologias from '../components/Tecnologias'
import Created from '../components/Created'
import Header from '../components/Header'




export default function tecnologiasPage () {
  return (
    <div className="text-white h-screen">
      <div className='bg-gray-600'>
        < Header
          appsFrontEnd="Front-end"
          appsBackEnd="Back-end"
          contatos="Contatos"
          homePage="Home Page"
        />
        <Tecnologias />
        <Created />
      </div>
    </div>
    
  )
}
