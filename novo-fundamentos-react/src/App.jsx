/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
  <div className="App">
    <h1>Fundamentos React </h1>

    <div className="Cards">

      <Card titulo='#08 - Renderização Condicional' color='#800020'>
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "Fern@ando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>

      <Card titulo='#07 - Desafio Tabela Produtos' color='#808000'>
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo='#06 - Repetição' color="#7393B3">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo='#05 - Componente com Filhos' color="#DE3163">

        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome='Pedro' ></FamiliaMembro>

          <FamiliaMembro nome='Ana' ></FamiliaMembro>
          <FamiliaMembro nome='Gustavo' ></FamiliaMembro>

        </Familia>
      </Card>

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
