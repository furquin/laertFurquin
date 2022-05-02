import React from 'react'
import dbFront from '../db/front-end'
import FrontEndCards from './FrontEndCards';


export function FrontEnd() {
  return (
    <div className='bg-gradient-to-b from-lime-800 via-green-400 to-emerald-200'>
      <div className='flex flex-wrap justify-around'>
          {dbFront.map((value) => (
          <FrontEndCards
            key={ value.name }
            name={ value.name }
            image={ value.image }
            description={ value.description }
            link={ value.link }
          />
        ))}  
      </div>
    </div>
    )  
}

export default FrontEnd