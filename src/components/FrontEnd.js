import React from 'react'
import { Link } from 'react-router-dom'
import dbFront from '../db/front-end'
import FrontEndCards from './FrontEndCards';


export function BackEnd() {
  return (
    <>
      <div className='flex justify-center'>
        <Link to="/" >
          <div>
            <h1 className='text-6xl text-blue'> Home Page </h1>
          </div>
        </Link>
      </div>
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
    </>
    )  
}

export default BackEnd