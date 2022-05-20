import React from 'react'
import Tecnologias from '../components/Tecnologias'
import Created from '../components/Created'
import Header from '../components/Header'




export default function tecnologiasPage () {
  return (
    <div className="text-white">
      <div className='bg-gray-600 h-850'>
        < Header
          appsFrontEnd="Apps Front-end"
          appsBackEnd="Apps Back-end"
          contatos="Contatos"
          homePage="Home Page"
        />
        <Tecnologias />
      </div>

      <div>
        <Created className='mt-10' />
      </div>
    </div>
    
  )
}
