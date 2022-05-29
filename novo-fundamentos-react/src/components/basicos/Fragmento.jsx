import React from "react";
// <React.Fragment> == <>. Se eu quiser usar alguma propriedade dentro do react fragment eu não posso passar a tag vazia, precisa ser o React.Fragment e colocar as propriedades depois. O react fragment é para envolver as tags, se eu não quiser usar uma tag div ou uma tag span. 
export default function Fragmento(props) {
  return (
    <> 
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </>
  )
}