import React from 'react'
import { Link } from 'react-router-dom'
import dbBack from '../db/back-end'
import BackEndCards from './BackEndCards';


export function BackEnd() {
    return (
     <div className='bg-gradient-to-b from-red-600 via-orange-400 to-amber-300'>
      <div className='flex flex-wrap justify-around'>
          {dbBack.map((value) => (
          <BackEndCards
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

export default BackEnd