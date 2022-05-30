/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  const { min, max } = props //definição das constantes por destructuring, mas poderia ser feito separadamente 
  const aleatorio = parseInt(Math.random() * (max - min)) + props.min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong> {min}</p>
      <p><strong>Valor Máximo: </strong> {max}</p>
      <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
    </div>
  );
}