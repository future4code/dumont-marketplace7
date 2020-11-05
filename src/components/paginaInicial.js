import React from "react";
import styled from "styled-components";
import Logo from "../img/Logo.png";
import { Button, Typography } from '@material-ui/core'
import Rodape from './Rodape'

const Head = styled.header`
  display: flex;
  text-align:center;
  align-items:center;
  margin-left:600px;

`;

const Titulo = styled.h1`
  width: 100%;
  padding: 10px;
  margin:0;
  text-align: center;
  border-top: 4px solid #5ce;
  background-color: #f3940c;
  color: #ffffff;
  font-family: "Lora", serif;
  font-size: 2em;
`;

const ImagemLogo = styled.img`
display:flex;
align-items:center;
width: 150px;
height: 150px;
text-align:center;
margin:0;
 
`;

class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <ImagemLogo src={Logo} alt="Logo do Elo4" />

        </Head>
        <Titulo>Seja muito bem vindo a Elo4 !!!</Titulo>
        <section>
          <Button variant='contained' size='medium' color='primary' onClick={this.props.botaoFornecedor}>Fornecedor
        </Button>
        </section>
        <section>
          <Button variant='contained' size='medium' color='primary' onClick={this.props.botaoCliente}>Cliente
        </Button>
        </section>
        
        <Rodape />
      </div>
    );
  }
}

export default PaginaInicial;
