import React, { Component } from "react";

export default class Lista extends Component {
  render() {
    let valorGuardado = localStorage.getItem("@valorGuardado");

    return (
      <div>
        <h1>Minha tela Lista</h1>
        <h2>
          O botão foi clicado?
          {valorGuardado === "clicado" ? "sim" : "não"}
        </h2>
      </div>
    );
  }
}
