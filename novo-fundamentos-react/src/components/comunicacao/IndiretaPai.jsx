/* eslint-disable import/no-anonymous-default-export */
/* Para conseguirmos fazer a comunicação indireta, que é passar informações do componente filho para o componente pai, devemos fazê-lo por meio de uma função no componente pai.

A partir do useState nós conseguimos criar o estado no componente. O hook useState retorna um array com duas posições, sendo que a primeira posição retorna o valor, a segunda retorna uma função para alterar o valor. 
*/

import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [profissao, setProfissao] = useState('?')

  function fornecerInfoFilho(nome, idade, profissao) {
    setNome(nome);
    setIdade(idade);
    setProfissao(profissao);
  };

  return (
    <div>
      <div>
        <span><strong>Informações Pai: </strong></span>
        <span>{nome} </span>
        <span><strong>{idade} </strong></span>
        <span>{profissao}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInfoFilho} />
    </div>
  )
}
