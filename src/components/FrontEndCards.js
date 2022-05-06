import React from 'react'



export function FrontEndCards(props) {
    const { name, image, description, link } =  props
    return (
      <div className='items-center w-330'>
        <a className='w-330 h-330' href={link} target='_blank'  rel="noopener noreferrer" >
          <div>
            <h1 className='flex justify-center mt-8 text-white text-3xl w-330'>{ name }</h1>
          </div>
          <div className='flex flex-col items-center' >
            <div className="flex justify-center opacity-85 hover:opacity-100">
              <img className='rounded-3xl p-2 mt-2 w-250 h-250 hover:scale-105 transition-all duration-300 hover:border-4 border-orange-500' src={image} alt={name} />
            </div>
            <div className='text-gray-500 ml-4 p-2 w-250 text-base'>
              <p>{ description }</p>
            </div>
          </div>  
        </a>  
      </div>
    )  
}

export default FrontEndCards