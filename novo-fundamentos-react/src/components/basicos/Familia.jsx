/* eslint-disable import/no-anonymous-default-export */
/* Para passar o metodo cloneElement eu poderia fazer pelo import do react por meio de um par de chaves dentro do import React passando o método, e retornaria somente o objeto. 
import React, { cloneElement } from react;
...
{cloneElement(props.children)}*/
import React from "react";


export default props => {

  return (
    <div>
      {
        React.Children.map(props.children, (child) => {
          return React.cloneElement(child, props);
        })
      }
      
    </div>
  );
}