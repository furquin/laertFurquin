import allForOne from '../db_images/all_for_one.png'
import oneForAll from '../db_images/one_for_all.png'
import docker from '../db_images/docker.png'
import storeManager from '../db_images/store_manager.png'
import talkerManager from '../db_images/talker_manager.png'
import blogsApi from '../db_images/blogs_api.png'


const projectsFrontEnd =
[
    {
        name: 'All for One',
        image:`${allForOne}`,
        description: 'Meu primeiro contato com MySql, aprendi a realizar query simples como SELECT, UPDATE, DELETE com alguns filtros.',
        link: 'https://github.com/furquin/introducao-mySql'

    },
    {
        name: 'One for All',
        image:`${oneForAll}`,
        description:'Criei um pequeno banco de dados e o populei, realizei query mais complexas utilizando JOIN, ORDER BY, GROUP BY e outros filtros.',
        link: 'https://github.com/furquin/funcoes-Mysql'

    },
    {
        name: 'Docker',
        image:`${docker}`,
        description:'Aprendi a realizar comandos para criar, rodar e verificar containers, criei dockerfile e realizei build de image',
        link: 'https://github.com/furquin/introducao-docker'

    },
    {
        name: 'Store Manager',
        image:`${storeManager}`,
        description:'Dividi o projeto em model, service e controller, acessei o banco de dados através da connection, construi testes utilizando mocha, chai e sinon, realizei 30 testes cobrindo mais de 70% do projeto',
        link: 'https://github.com/furquin/store-manager'

    },
    {
        name: 'Talker Manager',
        image:`${talkerManager}`,
        description:'Primeiro projeto em node.js, implementei rotas de criação, leitura, alteração e deleção de itens, alguns middlewares para verificação da requisição.',
        link: 'https://github.com/furquin/talker-manager'
    },
    {
        name: 'Blogs API',
        image:`${blogsApi}`,
        description:'Utilizando a divisão MSC (model, service, controller), utilizei sequelize para poder criar, mapear e popular o banco, utilizei JTW (json web token) para verificar autenticidade de usuário',
        link: 'https://github.com/furquin/blogs-api'
    }
    
]

export default projectsFrontEnd;