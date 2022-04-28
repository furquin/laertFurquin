import React from 'react'


export function BackEndCards(props) {
    const { name, image, description, link } =  props
    return (
      <div className='w-330 h-330'>
        <a href={link} target='_blank' rel="noopener noreferrer" >
          <div>
            <h1>{ name }</h1>
          </div>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            <p>{ description }</p>
          </div>
        </a>  
      </div>
    )  
}

export default BackEndCards