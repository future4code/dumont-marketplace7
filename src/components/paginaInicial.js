import React, { Component } from "react";
import logo from "../img/Logo.png";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <NavWrapper>
        <NavLogo src={logo} alt="Página Inicial" className="navbar-brand" />
        <section className='secao1'>   
        <Button className ='buttonEntrada' variant='contained' size='medium' color='primary' onClick={this.props.botaoFornecedor}>Fornecedor
        </Button>
        </section>
        <section className='secao2'>
        <Button className ='buttonEntrada'variant='contained' size='medium' color='primary' onClick={this.props.botaoCliente}>Cliente
        </Button>                   
        </section>
        </NavWrapper>
        </div>
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  background: #f3940c;
  li {
    list-style: none;
    margin: 1.2rem;
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const NavLogo = styled.img`
 width:55%
  
`;

    