/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
      <div>
        <DiretaFilho nome="Augusto" idade={25} nerd={true} />
        <DiretaFilho nome="Maria" idade={22} nerd={true} />
        <DiretaFilho nome="Pedro" idade={15} nerd={false} />
      </div>
    )
}

/* Comunicação direta é passar por meio das propos (propiedades) os dados que você quer para o componente filho.
Dentro do componente pai você tem uma referência para o componente filho.

O componente filho define a regra (ou seja, a estrutura lógica está no filho) e o componente pai passa os valores que serão lidos pelo componente filho. Depois eu chamarei o componente pai (que importou o componente filho) para o componente App para imprimir na página*/