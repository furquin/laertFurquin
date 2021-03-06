import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {

  const { tecnologias, contatos, appsBackEnd, appsFrontEnd, homePage } = props

  return (
    <div className="flex justify-around text-2xl bg-gray-700 text-white p-3">
      
      {homePage &&
        <Link className="hover:text-orange-500 hover:scale-110" to="/">
          <h3>{homePage}</h3>
        </Link>
        
      }

      {tecnologias &&
        <Link  className="hover:text-orange-500 hover:scale-110" to="/tecnologias">
          <h3>{tecnologias}</h3>
        </Link>
      }
      {contatos &&
        <Link className="hover:text-orange-500 hover:scale-110" to="/contatos">
          <h3>{contatos}</h3>
        </Link>
      }
      {appsBackEnd &&
        <Link className="hover:text-orange-500 hover:scale-110" to="/backEnd">
          <h3>{appsBackEnd}</h3>
        </Link>
      }
      {appsFrontEnd &&
        <Link className="hover:text-orange-500 hover:scale-110" to="/frontEnd">
          <h3>{appsFrontEnd}</h3>
        </Link>
      }
    </div>
  )
}
