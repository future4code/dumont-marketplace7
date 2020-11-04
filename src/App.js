
import React from 'react';
import './App.css';
import PaginaCliente from './components/paginaCliente'
import PaginaInicial from './components/paginaInicial'
import PaginaFornecedor from './components/paginaFornecedor'

class App extends React.Component {
  state = {
    telaAtual: "inicial"
  };

  irParaCliente = () => {
    this.setState({ telaAtual: "cliente" })
  };

  irParaFornecedor = () => {
    this.setState({ telaAtual: "fornecedor" })
  };

  render() {
    const renderizaTelaCorreta = () => {
      switch (this.state.telaAtual) {
        case "inicial":
          return <PaginaInicial botaoCliente={this.irParaCliente} botaoFornecedor={this.irParaFornecedor}/>
        case "cliente":
          return <PaginaCliente />;
        case "fornecedor":
          return <PaginaFornecedor />;
        default:
          return <div>Página não encontrada</div>;
      }
    }
    return (
      <div>
        {renderizaTelaCorreta()}
      </div>
    )
  }
}

export default App;