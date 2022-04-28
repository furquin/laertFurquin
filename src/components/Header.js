import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-around text-4xl bg-black text-white p-3">
              
        <Link to="/frontEnd">
            <h3>Apps Front-end </h3>
        </Link>

        <Link to="/backEnd">
            <h3>Apps Back-end </h3>      
        </Link>

    </div>
  )
}
