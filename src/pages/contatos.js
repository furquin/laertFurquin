import React from 'react'
import Contatos from '../components/Contatos'
import Created from '../components/Created'
import { Link } from 'react-router-dom'




export default function ContatoPage () {
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
        <Contatos />
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
