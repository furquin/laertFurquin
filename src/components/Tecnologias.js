import React from 'react'
import backEndImage from '../images/backEnd.png'
import frontEndImage from '../images/frontEnd.png'
import { Link } from 'react-router-dom';



export default function Tecnologias() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around bg-cyan-600">
        <Link className="opacity-85 hover:opacity-100" to="/frontEnd">
          <div>
            <h1 className="mt-16 flex justify-center text-white text-4xl">Front-end</h1>
          </div>
          <div className="mt-4">
            <img className='hover:scale-105 transition-all duration-300 rounded-3xl w-450 h-450 ' src={frontEndImage} alt='imagem-de-tecnologias-front-end' />     
          </div>
          <div className="mb-6 flex justify-between">
            <div className="text-white text-2xl p-3 mt-3">
              <li className="p-2">Estados</li>
              <li className="p-2" >Eventos</li>
              <li className="p-2" >Ciclos de vida</li>
              <li className="p-2" >Rotas</li>
            </div>
            <div className="text-white text-2xl p-3 mt-3">
              <li className="p-2" >Testes com RTL</li>
              <li className="p-2" >Redux</li>
              <li className="p-2" >Context API</li>
              <li className="p-2">React Hooks</li>
            </div>
          </div>
        </Link>
        <Link className="opacity-85 hover:opacity-100" to="/backEnd">
          <div>
            <h1 className="mt-16 flex justify-center text-white text-4xl">Back-end</h1>
          </div>
          <div className="mt-4">
            <img className='rounded-3xl w-450 h-450 hover:scale-105 transition-all duration-300'src={backEndImage} alt='imagem-de-tecnologias-back-end' />     
          </div>
         <div className="flex justify-between">
            <div className="mb-6 text-white text-2xl p-3 mt-3">
              <li className="p-2" >SQL</li>
              <li className="p-2" >NoSQL</li>
              <li className="p-2" >Node.js</li>
              <li className="p-2" >Express.js</li>
            </div>
            <div className=" text-white text-2xl p-3 mt-3">
              <li className="p-2" >API REST</li>
              <li className="p-2" >JWT</li>
              <li className="p-2" >Sequelize</li>
              <li className="p-2" >Heroku</li>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
