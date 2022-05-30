/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamentos React </h1>

    <div className="Cards">
      <Card titulo='#04 - Desafio Aleatório' color="#E97451">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#088F8F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#AA336A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3} />
      </Card>

      <Card titulo=" #01 - Primeiro Componente" color="#E37383">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
