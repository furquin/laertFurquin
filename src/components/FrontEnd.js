import React from 'react'
import { Link } from 'react-router-dom'
import dbFront from '../db/front-end'
import FrontEndCards from './FrontEndCards';


export function FrontEnd() {
  return (
    <div className='bg-gradient-to-b from-lime-800 via-green-400 to-emerald-200'>
      <div className='flex justify-center'>
        <Link to="/" >
          <div>
            <h1 className='mt-6 text-6xl font-bold underline '> Home Page </h1>
          </div>
        </Link>
      </div>
      <div className='mt-6 flex flex-wrap justify-around'>
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