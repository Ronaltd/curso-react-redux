/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-anonymous-default-export */
// Um componente não controlado é aquele que não está vinculado à nenhum estado(state), por isso ele é um componente não controlado

import React, { useState } from "react";
import "./Input.css";

export default (props) => {

  const [valor, setValor] = useState('Valor Inicial') // passo no primeiro campo da variável o nome que eu quero dar, no segundo campo eu passo a informação de que irei alterar o valor dessa componente (leva o nome de setNomeDaVariavel), e dentro do parênteses do hook eu passo o valor inicial que eu quero para aquela variável.

  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>

        <input value={valor} onChange={quandoMudar} /> 
        <input value={valor} readOnly />
        <input value={undefined}  />

      </div>
    </div>
  );
};

//o 1º input é um componente controlado, o 2ª é somente leitura, não consigo alterar, e o 3º é um componente não controlado, não estando vinculado à um estado(state). O componente visual somente mudará se estiver vinculado a um estado. Ou seja, o estado muda, o componente visual irá mudar, caso contrário não acontecerá. Fluxo unidirecional.
