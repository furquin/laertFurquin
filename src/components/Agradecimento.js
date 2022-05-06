import React from 'react';
import agradecimento from '../images/agradecimento.gif';
import Header from '../components/Header';



export function Agradecimento() {
  return (
    <div>
      <div>
        <Header
          contatos="contatos"
          homePage="Home Page"
          tecnologias="Tecnologias"
        />
        </div>
      <div className="flex flex-col items-center bg-gray-800">        
        <div>
          <img className="mt-12 mb-20 w-800 h-700" src={agradecimento} alt="gif de agradecimento" />
        </div>
      </div>
    </div>
    )  
}

export default Agradecimento