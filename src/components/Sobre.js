import React, { Component } from "react";
import perfil from "../images/perfil.png";

export class Sobre extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center bg-gray-800 h-screen">
        <div className="flex justify-around mt-16 mb-32 ">
          <div className="max-w-screen-sm">
            <img
              className="mt-n55 w-450 h-570 rounded-3xl"
              src={perfil}
              alt="imagem-de-perfil"
            />
          </div>
          <div className="text-gray-500 max-w-xl text-2xl">
            <p>
              Prazer, me chamo Laert Furquin, tenho 26 anos.
              <br />
              <br />
              Sou desenvolvedor Backend, buscando novas experiências para
              aprimorar minhas habilidades como desenvolvedor.
              <br />
              <br />
              Tenho 2 anos de experiência com JavaScript, Typescript, NodeJS,
              TypeORM, Prisma, NestJS e Postgres. <br />
              <br />
              Também tenho vasto conhecimento em ExpressJs, Sequelize, MySQL,
              MongoDB, ReactJS, Html e CSS, Vue, Quasar. <br />
              <br />
              Atualmente estou estudando análise de dados com python.
              <br />
              <br />
              Sou muito organizado e dedicado.
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
