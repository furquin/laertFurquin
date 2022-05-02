import React from 'react'
import Tecnologias from '../components/Tecnologias'
import Created from '../components/Created'
import Header from '../components/Header'




export default function AgradecimentoPage () {
  return (
    <div className="bg-black text-white">
      <div>
        < Header
          appsFrontEnd="Apps Front-end"
          appsBackEnd="Apps Back-end"
          contatos="Contatos"
          homePage="Home Page"
        />
        <Tecnologias />
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
