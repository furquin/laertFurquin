import React from 'react'
import { Link } from 'react-router-dom';
import agradecimento from '../images/agradecimento.gif'



export function Agradecimento() {
    return (
      <div className="flex flex-col items-center bg-gradient-to-b from-red-600 via-orange-400 to-amber-300">
        <div>
            <Link to="/" >
                <div>
                    <h1 className='mt-6 text-6xl font-bold underline '> Home Page </h1>
                </div>
            </Link>
        </div>
        <div>
          <img className="mt-12 mb-20 w-800 h-700" src={agradecimento} alt="gif de agradecimento" />
        </div>
      </div>
    )  
}

export default Agradecimento