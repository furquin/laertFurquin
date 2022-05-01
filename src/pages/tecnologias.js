import React from 'react'
import Tecnologias from '../components/Tecnologias'
import Created from '../components/Created'
import { Link } from 'react-router-dom'




export default function AgradecimentoPage () {
  return (
    <div className="bg-black text-white">
      <div className='flex justify-center'>
        <Link to="/" >
          <div>
            <h1 className='mt-4 text-6xl'> Home Page </h1>
          </div>
        </Link>
      </div>
      <div>
        <Tecnologias />
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
