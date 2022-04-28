import React, { Component } from 'react'
import perfil from '../images/perfil.png'


export class Sobre extends Component {
  render() {
    return (
      <div className="flex flex-col bg-gradient-to-r from-purple-900 via-blue-500 to-gray-500">
        <div>
          <h1 className="mt-10 flex justify-center text-6xl " > Um pouco sobre mim  </h1>
        </div>

        <div className='flex justify-around mt-32 mb-32 '>

          <div className="max-w-screen-sm" >
            <img src={ perfil } alt="imagem-de-perfil" />
          </div>
          <div className= 'max-w-xl text-4xl'>
            <p>
              Prazer, Laert Furquin, tenho 25 anos , amo animais e praias.
              Sou muito descontraído e agitado.
              Trabalho com desenvolvimento de software Full-stack, ainda em início de carreira, porém muito empolgado!
              Sempre busco novos desafios e possibilidades de me destacar, mostrando do que sou capaz. Sou muito curioso, alegre e muito dedicado.
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default Sobre