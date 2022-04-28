import React from 'react'



export function FrontEndCards(props) {
    const { name, image, description, link } =  props
    return (
      <div className='w-400'>
        <a className='w-330 h-330' href={link} target='_blank'  rel="noopener noreferrer" >
          <div>
            <h1 className='flex justify-center mt-8 text-5xl w-380'>{ name }</h1>
          </div>
          <div>
            <img className='p-2 mt-2 w-380 h-380' src={image} alt={name} />
          </div>
        </a>  
        <div>
          <p>{ description }</p>
         </div>
      </div>
    )  
}

export default FrontEndCards