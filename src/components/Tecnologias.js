import React from 'react'
import backEndImage from '../images/backEnd.png'
import frontEndImage from '../images/frontEnd.png'
import { Link } from 'react-router-dom';



export default function Tecnologias() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center bg-gray-600 h-screen">
        <Link className="opacity-85 hover:opacity-100" to="/frontEnd">
          <div className=''>
            <div>
              <h1 className="mt-16 flex justify-center text-white text-3xl">Front-end</h1>
            </div>
            <div className="flex justify-center mt-4">
              <img className='flex justify-center transition-all duration-300 rounded-3xl w-330 h-330 hover:border-4 border-orange-500 hover:scale-105' src={frontEndImage} alt='imagem-de-tecnologias-front-end' />     
            </div>
          </div>
          <div className="mb-6 flex justify-between">
            <div className="text-white text-xl p-3 mt-3">
              <li className="p-2">Ciclos de vida</li>
              <li className="p-2" >Eventos</li>
              <li className="p-2" >Rotas</li>
              <li className="p-2" >Estados</li>
            </div>
            <div className="text-white text-xl p-3 mt-3">
              <li className="p-2" >Context API</li>
              <li className="p-2" >Redux</li>
              <li className="p-2" >RTL</li>
              <li className="p-2">React Hooks</li>
            </div>
          </div>
        </Link>
        <Link className="opacity-85 hover:opacity-100" to="/backEnd">
          <div>
            <h1 className="mt-16 flex justify-center text-white text-3xl">Back-end</h1>
          </div>
          <div className="flex justify-center mt-4">
            <img className='rounded-3xl w-330 h-330 hover:scale-105 transition-all duration-300 hover:border-4 border-orange-500'src={backEndImage} alt='imagem-de-tecnologias-back-end' />     
          </div>
         <div className="flex justify-between">
            <div className="mb-6 text-white text-xl p-3 mt-3">
              <li className="p-2" >SQL</li>
              <li className="p-2" >NoSQL</li>
              <li className="p-2" >Node.js</li>
              <li className="p-2" >Express.js</li>
            </div>
            <div className=" text-white text-xl p-3 mt-3">
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
