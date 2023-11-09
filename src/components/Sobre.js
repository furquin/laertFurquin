import React, { Component } from "react";
import perfil from "../images/perfil.png";

export class Sobre extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center bg-gray-800 h-screen">
        <div className="flex justify-around mt-16 mb-32 ">
          <div className="max-w-screen-sm">
            <img
              className="mt-70 w-600 h-600 rounded-3xl"
              src={perfil}
              alt="imagem-de-perfil"
            />
          </div>
          <div className="text-gray-500 max-w-xl text-2xl">
            <p>
              Aos 18 anos tomei a decisão de sair de casa para novas aventuras.
              Servi dois anos no exército, onde desenvolvi habilidades como
              gestão do tempo, disciplina e trabalho em equipe.
              <br />
              <br />
              Durante esse período, explorei minha afinidade com a tecnologia.
              Após deixar o serviço militar, direcionei minha carreira para a
              área de tecnologia. Inicialmente sem um foco específico, então
              descobri o desenvolvimento web durante pesquisas sobre criação de
              apps de delivery.
              <br />
              <br />A partir dai, iniciei uma jornada de estudos, desenvolvendo
              habilidades em tecnologias como TypeScript, JavaScript, Node.js,
              Nest.js, Prisma, TypeORM, Express.js, Sequelize, MySQL, Postgres
              entre outras. Ao longo do tempo, também aprimorei minhas habilidades de
              comunicação, criatividade, colaboração e visão de longo prazo.
              <br />
              <br />
              Atualmente, busco novas oportunidades para aplicar e expandir
              essas habilidades, continuando meu crescimento profissional.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
