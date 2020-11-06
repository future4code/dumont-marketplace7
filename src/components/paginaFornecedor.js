import React, { Component } from "react";
import logo from "../img/Logo.png";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
// import { FilterNone } from "@material-ui/icons";
import Rodape from "./Rodape";

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

export default class Navbar extends Component {
  state = {
    dadosMeuBanco: [],
    nome: "",
    descricao: "",
    preco: "",
    metodoPgto: "",
    categoria: "",
    fotos: "",
    numeroParcelas: "",
  };

  postarProdutos = () => {
    const body = {
      name: this.state.nome,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethod: this.state.metodoPgto,
      category: this.state.categoria,
      photos: [this.state.fotos],
      installments: Number(this.state.numeroParcelas),
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products",
        body
      )
      .then((response) => {
        console.log("res", response);
        this.setState({ nome: "" });
        this.setState({ descricao: "" });
        this.setState({ preco: "" });
        this.setState({ metodoPgto: "" });
        this.setState({ categoria: "" });
        this.setState({ fotos: "" });
        this.setState({ numeroParcelas: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  pegandoProdutos = () => {
    const apiUrl =
      "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products";
    axios.get(apiUrl).then((response) => {
      this.setState({ dadosMeuBanco: response.data });
    });
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangePreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  onChangeCategoria = (event) => {
    this.setState({ categoria: event.target.value });
  };

  onChangeFotos = (event) => {
    this.setState({ fotos: event.target.value });
  };

  onChangeNumeroParcelas = (event) => {
    this.setState({ numeroParcelas: event.target.value });
  };

  onChangeMetodoPagamento = (event) => {
    this.setState({ metodoPgto: event.target.value });
  };

  render() {
    const trazTodosProdutos = this.state.dadosMeuBanco.map((dados) => {
      return (
        <p key={dados.id}>
          {dados.name} {dados.description}
          {dados.price} {dados.category} {dados.photos} {dados.installments}
        </p>
      );
    });

    return (
      <div>
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
        </NavWrapper>

        <h1>Cadastrar produtos</h1>

        <section className="secao3">
          <ul>
            <li>
              <input
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.onChangeNome}
              />
            </li>

            <li>
              <input
                placeholder="Descrição"
                value={this.state.descricao}
                onChange={this.onChangeDescricao}
              />
            </li>
            <li>
              <input
                type="number"
                placeholder="Valor"
                value={this.state.preco}
                onChange={this.onChangePreco}
              />{" "}
            </li>

            <div className="selecionarPagamento">
              <li>
                <select
                  name="opcoes"
                  id="select"
                  placeholder="Opção Pagamento"
                  onChange={this.onChangeMetodoPagamento}
                >
                  <option value="">Selecionar</option>
                  <option value="boleto">Boleto</option>
                  <option value="cartao">Cartão</option>
                </select>
              </li>
            </div>

            <div className="selecionarCategoria">
              <li>
                <select
                  name="opcoes"
                  id="select"
                  placeholder="Categoria"
                  onChange={this.onChangeCategoria}
                >
                  <option value="">Selecionar</option>
                  <option value="casa">Casa</option>
                  <option value="jardim">Jardim</option>
                  <option value="festa">Festa</option>
                </select>
              </li>
            </div>

            <li>
              <input
                placeholder="Url das fotos"
                value={this.state.fotos}
                onChange={this.onChangeFotos}
              />
            </li>
            <li>
              <input
                type="number"
                // size="20"
                // maxlength="50"
                // height="20px"
                placeholder="Número de parcelas"
                value={this.state.numeroParcelas}
                onChange={this.onChangeNumeroParcelas}
              />
            </li>
          </ul>
        </section>

        <Button
          className="buttonCadastrar"
          variant="contained"
          size="medium"
          color="primary"
          onClick={this.postarProdutos}
        >
          Cadastrar produto
        </Button>
        <div>{trazTodosProdutos}</div>
        <Rodape />
      </div>
    );
  }
}
