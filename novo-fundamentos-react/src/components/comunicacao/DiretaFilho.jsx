/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    return (
      <div>
        <span><strong>{props.nome}</strong> - </span>
        <span>Idade: <strong>{props.idade}</strong> - </span>
        <span>É nerd? {props.nerd ? 'Verdade' : 'Mentira'}</span>
      </div>
    );
}