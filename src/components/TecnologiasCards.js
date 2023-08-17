import React from "react";

export default function TecnologiasCards(props) {
  const { name, image } = props;
  return (
    <div className="flex flex-col gap-2 items-center justify-center rounded-3xl w-52 h-52 hover:scale-105 transition-all duration-300 hover:border-4 border-orange-500">
      <div>
        <div className="opacity-85 hover:opacity-100">
          <img
            className="p-2 mt-2 w-20 h-20"
            src={image}
            alt={name}
          />
        </div>
      </div>
      <div className="text-center text-white text-3xl w-52">
        <h1>
          {name}
        </h1>
      </div>
    </div>
  );
}
