import React from 'react'
import styled from "styled-components";

export default class Filtro extends React.Component {
    render() {
        return <FiltroContainer>

            <h3>Filtros</h3>

            <InputContainer>
                Valor mínimo:
                <input
                type= "number"
                value= {this.props.filtroMinimo}
                onChange={this.props.onChangeFiltroMinimo}
                />
            </InputContainer>

            <InputContainer>
                Valor máximo:
                <input
                type= "number"
                value= {this.props.filtroMaximo}
                onChange={this.props.onChangeFiltroMaximo}
                />
            </InputContainer>

            <InputContainer>
                Nome:
                <input
                type= "text"
                value= {this.props.filtroNome}
                onChange={this.props.onChangeFiltroNome}
                />
            </InputContainer>

            <InputContainer>
                Categoria:
                <input
                type= "text"
                value= {this.props.filtroCategoria}
                onChange={this.props.onChangeFiltroCategoria}
                />
            </InputContainer>

        </FiltroContainer>
    }
}

const FiltroContainer = styled.div`
    border: 1px solid black;
`
const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    padding: 8px;
`