import React, { Component } from "react";
import logo from "../img/Logo.png";
import styled from "styled-components";
// import { Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { FilterNone } from "@material-ui/icons";
import Rodape from "./Rodape";
import { Button, Typography } from "@material-ui/core";

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
const DivisaoProdutos = styled.div`
  display: flex;
  justify-content: space-around;
  outline: none;
`;

export default class Navbar extends Component {
  state = {
    pegarProdutos: [],
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
      photos: this.state.fotos,
      installments: Number(this.state.numeroParcelas),
    };
    console.log(body);
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products/",
        body
      )
      .then((res) => {
        console.log("res", res.name);
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

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangePreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  onChangeMetodoPgto = (event) => {
    this.setState({ metodoPgto: event.target.value });
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

  render() {
    // console.log("asdasd", )
    // const trazTodosProdutos = this.state.pegarProdutos.map((products) => {
    //   return <p key={products.id}>{products.name} {products.description}
    //   {products.price} {products.category} {products.photos} {products.installments}
    //   </p>;
    // });
    return (
      <div>
        <NavWrapper>
          <NavLogo src={logo} alt="Página Inicial" className="navbar-brand" />

          <ul>
            <li onClick={this.props.irParaCliente}>Produtos</li>
          </ul>

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
                placeholder="Preço"
                value={this.state.preco}
                onChange={this.onChangePreco}
              />
            </li>

            <div className="selecionarPagamento">
              <li>
                <select value={this.state.metodoPgto} onChange={this.onChangeMetodoPgto} name="opcoes" id="select" placeholder="Opção Pagamento">
                  <option>Selecionar</option>
                  <option>Boleto</option>
                  <option>Cartão</option>
                </select>
              </li>
            </div>

            <div className="selecionarCategoria">
              <li>
                <select value={this.state.categoria} onChange={this.onChangeCategoria} name="opcoes" id="select" placeholder="Categoria">
                  <option>Selecionar</option>
                  <option>Casa</option>
                  <option>Jardim</option>
                  <option>Festa</option>
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
                size="20"
                maxlength="50"
                height="20px"
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
          onClick={this.props.botaoFornecedor}
        >
          Cadastrar produto
        </Button>

        <Rodape />
      </div>
    );
  }
}
