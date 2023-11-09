import storeManager from "../db_images/store_manager.png";
import talkerManager from "../db_images/talker_manager.png";
import blogsApi from "../db_images/blogs_api.png";
import smith from "../db_images/smith.png";
import cashforce from "../db_images/cashforce.png";
import futebolClube from "../db_images/futebol_clube.jpeg";
import pratas from "../db_images/pratas.png";
import gastos from "../db_images/gastos.png";


const projectsBackend = [
  {
    name: "Store Manager",
    image: `${storeManager}`,
    description:
      "Dividi o projeto em model, service e controller, acessei o banco de dados através da connection, construi testes utilizando mocha, chai e sinon, realizei 30 testes cobrindo mais de 70% do projeto.",
    link: "https://github.com/furquin/store-manager",
  },
  {
    name: "Talker Manager",
    image: `${talkerManager}`,
    description:
      "Primeiro projeto em node.js, implementei rotas de criação, leitura, alteração e deleção de itens, alguns middlewares para verificação da requisição.",
    link: "https://github.com/furquin/talker-manager",
  },
  {
    name: "Blogs API",
    image: `${blogsApi}`,
    description:
      "Utilizando a divisão MSC (model, service, controller), utilizei sequelize para poder criar, mapear e popular o banco, utilizei JTW (json web token) para verificar autenticidade de usuário.",
    link: "https://github.com/furquin/blogs-api",
  },
  {
    name: "Smith",
    image: `${smith}`,
    description:
      "Implementado com arquitetura MSC e desenvolvido com Typescript facilitando para realizar manutenções, utilizando JOI para as devidas validações em middlewares.",
    link: "https://github.com/furquin/smith",
  },
  {
    name: "CashForce",
    image: `${cashforce}`,
    description:
      "Implementado com arquitetura MSC e desenvolvido com JavaScript, utilizando sequelize para comunicação com o banco de dados e com front-end desenvolvido com react.",
    link: "https://github.com/furquin/cashforce",
  },
  {
    name: "Futebol Clube",
    image: `${futebolClube}`,
    description:
      "Projeto desenvolvido em TypeScript, divido em model, service e controller, acessei o banco de dados através de sequelize, construi testes utilizando mocha, chai e sinon, realizei mais de 20 testes que cobrem mais de 80% da aplicação.",
    link: "https://github.com/furquin/futebol-clube",
  },
  {
    name: "Controle de Gastos",
    image: `${gastos}`,
    description:"Projeto ainda em desenvolvimento, consiste em uma API de controle de gastos, de acordo com os dados que o usuário inserir. utilizei NestJs para facilitar o desenvolvimento e para ORM utilizei o Prisma pois é muito completo e muito simples de trabalhar, ajudando bastante na comunicação com o bando de dados",
    link: "https://github.com/furquin/panilhaFinanceira",
  },
  {
    name: "Joias de Prata",
    image: `${pratas}`,
    description: "Projeto ainda em desenvolvimento, consiste em uma API para controle de produtos de uma loja de joias, de acordo com os dados que o usuário inserir. pensando em um e-commerce realizo a autenticidade de um usuário através de um decorator, que valida o token de login e a uma lista  de controle de acesso",
    link: "https://github.com/furquin/backendPratas"
  }
];

export default projectsBackend;
