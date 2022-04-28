import React from 'react'
import backEndImage from '../images/backEnd.png'
import frontEndImage from '../images/frontEnd.png'
import { Link } from 'react-router-dom';

export default function Tecnologias() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="flex justify-center text-6xl mb-12 bg-black text-white p-3"> Algumas tecnologias que utilizo </h1>
      </div>
      <div className="flex justify-around">
        <Link to="/frontEnd">
          <div>
            <h1 className="flex justify-center text-6xl">Front-end</h1>
          </div>
          <div className="mt-4">
            <img className='w-450 h-450' src={frontEndImage} alt='imagem-de-tecnologias-front-end' />     
          </div>
          <div className="flex justify-between">
            <div className="text-2xl p-3 mt-3">
              <li className="p-2">Estados</li>
              <li className="p-2" >Eventos</li>
              <li className="p-2" >Ciclos de vida</li>
              <li className="p-2" >Rotas</li>
            </div>
            <div className="text-2xl p-3 mt-3">
              <li className="p-2" >Testes Com RTL</li>
              <li className="p-2" >Redux</li>
              <li className="p-2" >Context API</li>
              <li className="p-2">React Hooks</li>
            </div>
          </div>
        </Link>
        <Link to="/backEnd">
          <div>
            <h1 className="flex justify-center text-6xl">Back-end</h1>
          </div>
          <div className="mt-4">
            <img className='w-450 h-450'src={backEndImage} alt='imagem-de-tecnologias-back-end' />     
          </div>
         <div className="flex justify-between">
            <div className="text-2xl p-3 mt-3">
              <li className="p-2" >SQL</li>
              <li className="p-2" >NoSQL</li>
              <li className="p-2" >Node.js</li>
              <li className="p-2" >Express.js</li>
            </div>
            <div className="text-2xl p-3 mt-3">
              <li className="p-2" >API REST</li>
              <li className="p-2" >JWT</li>
              <li className="p-2" >ORM</li>
              <li className="p-2" >Heroku</li>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
