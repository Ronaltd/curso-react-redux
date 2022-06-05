/* eslint-disable import/no-anonymous-default-export */
import React from "react";


export default props => {
  const callback = props.quandoClicar
  const max = 70;
  const min = 50;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <div>Filho</div>
      <button onClick={ () => callback('João', gerarIdade(), 'Advogado') }>
        Fornecer Informações
      </button>
    </div>
  )
}