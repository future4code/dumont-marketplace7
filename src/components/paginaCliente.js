import React, { Component } from "react";
import logo from "../img/Logo.png";
import styled from "styled-components";
import { Button, Typography, Grid, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import { Filters } from './components/filtro';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios'
import Products from './Products';
import { makeStyles } from '@material-ui/styles'
import Rodape from "./Rodape"



export default class PaginaCliente extends Component {
  render() {

    return (  
      <Grid container direction='column'>
      <NavWrapper>
        <NavLogo onClick={this.props.irParaPaginaInicial} src={logo} alt="Página Inicial" className="navbar-brand" />
        <IconButton onClick={this.props.irParaPaginaInicial} >
          <HomeIcon/>
        </IconButton>
        <ul>
          <li onClick={this.props.irParaCliente}>Produtos</li>
        </ul>

        <SearchBar>
          <SearchInput></SearchInput>

          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </SearchBar>

        <Button variant="contained" size="medium" color="primary">
          Ver carrinho
        </Button>
      </NavWrapper>
      
      {/* FILTRO AQUI */}

  
      
      {/* FILTRO ^^*/}

      <Grid item container>
        <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8}>
            <Products/>
          </Grid>

        <Grid item xs={false} sm={2}/>
      </Grid>
      <Footer>
                <h3>REDES SOCIAIS</h3>
                <a href="">
                    <img src="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-logotipo-do---cone-do-facebook-by-vexels.png" alt="imagem-facebook" width="50px" />
                </a>
                <a href="">
                    <img src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-do---cone-do-instagram-by-vexels.png" alt="imagem-instagram" width="50px" />
                </a>
                <a href="">
                    <img src="http://www.assistenciasocial.al.gov.br/configuracao/imagens/lateral/twitter-icon.png/image" alt="imagem-twitter" width="50px" />
                </a>
            </Footer>
      </Grid>
      
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: static;

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
  height: 10vh;
  width: 5vw;
  margin: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 50%;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  width: 100%;
  border-color: white;
  outline: none;
`;

const SearchBtn = styled.button`
  position: relative;
  background-color: transparent;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }

`;

const Footer = styled.div `
  text-align: center;
   bottom: 0;
   width: 100%;
   background-color: #605b57;
   position: static;
   color: white;
    padding-bottom: 10px;
`
`;

