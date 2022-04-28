import React from 'react'
import { Link } from 'react-router-dom'
import dbBack from '../db/back-end'
import BackEndCards from './BackEndCards';


export function BackEnd() {
    return (
      <div>
        <Link to="/" >
          <div>
            <h1>Home Page</h1>
          </div>
        </Link>
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
    )  
}

export default BackEnd