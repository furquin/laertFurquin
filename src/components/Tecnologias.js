import React from 'react'
import dbTecnologias from '../db/tecnologias'
import TecnologiasCards from './TecnologiasCards';


export function Tecnologias() {
    return (
     <div className='bg-gray-600 h-screen flex items-center justify-center content-end'>
      <div className='flex flex-wrap justify-around w-4/6 h-5/6'>
          {dbTecnologias.map((value) => (
          <TecnologiasCards
            key={ value.name }
            name={ value.name }
            image={ value.image }
          />
        ))}  
      </div>
    </div>
    )  
}

export default Tecnologias