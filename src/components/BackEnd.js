import React from 'react'
import dbBack from '../db/back-end'
import BackEndCards from './BackEndCards';


export function BackEnd() {
    return (
     <div className='bg-gray-600 h-full w-full'>
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