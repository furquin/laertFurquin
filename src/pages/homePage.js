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
                <Header
                    tecnologias="Tecnologias"
                    contatos="Contatos"
                    appsFrontEnd="Apps Front-end"
                    appsBackEnd="Apps Back-end"
                />
            </div> 
            <div> 
                <Sobre />
            </div>
            <div>
                <Header tecnologias="Algumas tecnologias que utilizo"/>
                <Tecnologias />
            </div>
            <div>
                <Header contatos="Meus contatos"/>
                <Contatos />
            </div>
            <div>
                <Created />
            </div>
        </div>
    )
}