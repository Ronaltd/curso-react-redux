/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {

  const isPar = props.numero % 2 === 0

  return <div> {isPar ? <span>Par</span> : <span>Ímpar</span>} </div>

};

/* Renderização condicional com um ternário:

  const isPar = props.numero % 2 === 0
  
  return (
    <div>
      {isPar ? 
      <span>Par</span> :
      <span>Ímpar</span>
      }
    </div>

*/