import React, { Component } from "react";

export default class Home extends Component {
  state = {
    foiClicado: ""
  };

  componentDidMount() {
    let valorGuardado = localStorage.getItem("@valorGuardado");
    console.log("componentDidMount => valorGuardado: " + valorGuardado);

    if (
      valorGuardado !== undefined &&
      valorGuardado !== null &&
      valorGuardado !== ""
    ) {
      this.setState({ foiClicado: valorGuardado });
    } else {
      this.setState({ foiClicado: "" });
    }
  }

  clicarBotao = (event) => {
    event.preventDefault();

    this.setState({ foiClicado: "clicado" });
    console.log(
      "clicarBotao => this.state.foiClicado: " + this.state.foiClicado
    );

    localStorage.setItem("@valorGuardado", this.state.foiClicado);

    let valorGuardado = localStorage.getItem("@valorGuardado");
    console.log("clicarBotao => valorGuardado: " + valorGuardado);
  };

  limparBotao = (event) => {
    event.preventDefault();

    this.setState({ foiClicado: "" });
    console.log(
      "clicarBotao => this.state.foiClicado: " + this.state.foiClicado
    );

    localStorage.removeItem("@valorGuardado");
  };

  render() {
    return (
      <div>
        <h1>Minha tela Home</h1>
        <button onClick={this.clicarBotao}>CLICAR</button>
        <button onClick={this.limparBotao}>LIMPAR</button>
        <h2>
          O botão foi clicado?
          {this.state.foiClicado === "clicado" ? "sim" : "não"}
        </h2>
      </div>
    );
  }
}
