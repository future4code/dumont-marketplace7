import React, { Component } from "react";
import logo from "../img/Logo.png";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import { Filters } from './components/filtro';

export default class Navbar extends Component {
  render() {
    return (
     
        <NavWrapper>
          <NavLogo src={logo} alt="Página Inicial" className="navbar-brand" />
          <ul>
            <li>Produtos</li>
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
        
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

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
