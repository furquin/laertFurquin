import React from 'react'
import Sobre from '../components/Sobre'
import Tecnologias from '../components/Tecnologias'
import Header from '../components/Header'
import Contatos from '../components/Contatos'
import Created from '../components/Created'


export default function homePage() {
    return (
        <div>
            <div>
                <Header />
            </div> 
            <div> 
                <Sobre />
            </div>
            <div>
                <Tecnologias />
            </div>
            <div>
                <Contatos />
            </div>
            <div>
                <Created />
            </div>
        </div>
    )
}