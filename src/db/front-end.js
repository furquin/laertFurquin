import solarSystem from '../db_images/solar_system.png'
import startWars from '../db_images/star_wars.png'
import tunes from '../db_images/tunes.png'
import wallet from '../db_images/wallet.png'
import RLT from '../db_images/RTL.png'
import cashforce from '../db_images/cashforce.png'
import vue from '../db_images/logoVue.png'


const projectsFrontEnd =
[
    {
        name: 'Solar System',
        image:`${solarSystem}`,
        description: 'Este foi meu primeiro contato com React, para realizar-lo utilizei criação de componentes de classe, puxando dados de um arquivo data e realizando passagem de props.',
        link: 'https://github.com/furquin/solar-system'

    },
    {
        name: 'Star Wars',
        image:`${startWars}`,
        description:'Utilizei componentes funcionais,fiz muito uso de React Hooks, para gerência de estados através do provider,realizei diversos filtros para preenchimento de dados.',
        link: 'https://github.com/furquin/starWars'

    },
    {
        name: 'Tunes',
        image:`${tunes}`,
        description:'Neste projeto trabalhei com algumas rotas, utilizando HashRouter, link, redirect e  realizai chamada a uma API para preenchimento de dados.',
        link: 'https://github.com/furquin/tunes'

    },
    {
        name: 'Wallet Finance',
        image:`${wallet}`,
        description:'Este foi bem desafiador, pois foi onde tive meu primeiro contato com redux, tive componentes com lógicas mais complexas utilizei uma API bem completa para fazer o controle financeiro.',
        link: 'https://github.com/furquin/Wallet'

    },
    {
        name: 'RTL',
        image:`${RLT}`,
        description:'Esse foi um dos que mais gostei, foi meu primeiro contato com teste em front-end, desenvolvi 25 teste para uma pequena aplicação.',
        link: 'https://github.com/furquin/react-teste'
    },
    {
        name: 'CashForce',
        image:`${cashforce}`,
        description:'Implementado com arquitetura MSC e desenvolvido com JavaScript, utilizando sequelize para comunicação com o banco de dados e com front-end desenvolvido com react',
        link: 'https://github.com/furquin/cashforce'
    },
    {
        name: 'Alura Tracker',
        image:`${vue}`,
        description:'Projeto fundamental para colocar em prática meus conhecimento adquiridos no curso de Vue, onde desenvolvi uma aplicação para controle tempo utilizado para desenvolver as tarefas do dia a dia, e organizar os projetos que estão sendo trabalhados.',
        link: 'https://alura-tracker-tau-ruddy.vercel.app/#/'
    },
    
]

export default projectsFrontEnd;