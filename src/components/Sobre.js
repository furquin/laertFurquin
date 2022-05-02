import React, { Component } from 'react'
import perfil from '../images/perfil.png'


export class Sobre extends Component {
  render() {
    return (
      <div className="flex flex-col bg-gradient-to-r from-purple-900 via-blue-500 to-gray-500">
        <div>
          <h1 className="mt-10 flex justify-center text-5xl " > Um pouco sobre mim  </h1>
        </div>

        <div className='flex justify-around mt-16 mb-32 '>

          <div className="max-w-screen-sm" >
            <img className="mt-n180 w-600 h-850" src={ perfil } alt="imagem-de-perfil" />
          </div>
          <div className= 'text-white max-w-xl text-3xl'>
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