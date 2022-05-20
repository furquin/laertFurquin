import React from 'react'
import Agradecimento from '../components/Agradecimento'
import Created from '../components/Created'



export default function AgradecimentoPage () {
  return (
    <div className='bg-gray-600 h-850'>

      <div>
        <Agradecimento />
      </div>

      <div>
        <Created />
      </div>
    </div>
    
  )
}
