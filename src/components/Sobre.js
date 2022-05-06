import React, { Component } from 'react'
import perfil from '../images/perfil.png'


export class Sobre extends Component {
  render() {
    return (
      <div className="flex flex-col bg-gray-800">
        <div>
          <h1 className="mt-10 flex text-white justify-center text-4xl " > Um pouco sobre mim  </h1>
        </div>

        <div className='flex justify-around mt-16 mb-32 '>

          <div className="max-w-screen-sm" >
            <img className="mt-n110 w-450 h-570 rounded-3xl" src={ perfil } alt="imagem-de-perfil" />
          </div>
          <div className= 'text-gray-500 max-w-xl text-2xl'>
            <p>
              Prazer, me chamo Laert Furquin, tenho 25 anos.<br/>
              <br/>
              Sou Desenvolvedor Junior Full-Stack, ainda em busca da primeira oportunidade de emprego, muito empolgado e animado.<br/>
              <br/>
              Tenho experiência com JavaScript, Typescript, NodeJS, ReactJS, Html e CSS.<br />
              <br/>
              Sempre busco novas motivações e desafios visando sempre me destacar e demonstrando minha capacidade.<br />
              <br/>
              Sou muito curioso e dedicado.<br />
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default Sobre