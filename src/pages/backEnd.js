import React from 'react'
import BackEnd from '../components/BackEnd';
import Created from '../components/Created'
import Header from '../components/Header'



export default function BackEndPage () {
  return (
    <div >

      <div>
        < Header
          appsFrontEnd="Front-end"
          contatos="Contatos"
          tecnologias="Tecnologias"
          homePage="Home Page"
        />
        <BackEnd/>
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
