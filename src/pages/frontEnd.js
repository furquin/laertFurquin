import React from 'react'
import FrontEnd from '../components/FrontEnd'
import Created from '../components/Created'
import Header from '../components/Header'



export default function frontEndPage() {
  return (
    <div>

      <div>
        < Header
          appsBackEnd="Apps Back-end"
          contatos="Contatos"
          tecnologias="Tecnologias"
          homePage="Home Page"
        />
        <FrontEnd />
      </div>

      <div>
        <Created />
      </div>
    </div>
  )
}
