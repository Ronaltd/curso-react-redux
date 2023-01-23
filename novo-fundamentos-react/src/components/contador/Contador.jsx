// Se no import do react eu não colocar as chaves colocando o método que eu quero chamar, eu devo colocar no método a informação "React.método" (Exemplo: React.Component)

import "./Contador.css";
import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };
  //Eu faço uma função arrow com a função de incrementar para que seja possivel eu fazer o setState do meu contador de uma forma mais simples, sem precisar passar Constructor e super, ou fazer uma arrow function dentro do onClick do button.

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    )
  }
}

export default Contador