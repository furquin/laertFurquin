import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {

  const { tecnologias, contatos, appsBackEnd, appsFrontEnd, homePage } = props
  return (
    <div className="flex justify-around text-3xl bg-black text-white p-3">
      {homePage &&
        <Link to="/">
          <h3>{homePage}</h3>
        </Link>
      }

      {tecnologias &&
        <Link to="/tecnologias">
          <h3>{tecnologias}</h3>
        </Link>
      }
      {contatos &&
        <Link to="/contatos">
          <h3>{contatos}</h3>
        </Link>
      }
      {appsBackEnd &&
        <Link to="/backEnd">
          <h3>{appsBackEnd}</h3>
        </Link>
      }
      {appsFrontEnd &&
        <Link to="/frontEnd">
          <h3>{appsFrontEnd}</h3>
        </Link>
      }
    </div>
  )
}
