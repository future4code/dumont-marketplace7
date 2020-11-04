import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../img/Logo.png";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fcebd0;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Titulo = styled.h1`
  width: 100%;
  margin-bottom: 200px;
  padding: 10px;
  float: left;
  text-align: center;
  line-height: 50px;
  border-top: 4px solid #5ce;
  background-color: #f3940c;
  color: #ffffff;
  font-family: "Lora", serif;
  font-size: 2em;
`;

const ImagemLogo = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 3%;
  left: 43%;
`;

export class TelaPrincipal extends Component {
  render() {
    return (
      <Head>
        <ImagemLogo src={Logo} alt="Logo do Elo4" />
        <Titulo>Seja muito bem vindo a Elo4 !!!</Titulo>
      </Head>
    );
  }
}

export default TelaPrincipal;
