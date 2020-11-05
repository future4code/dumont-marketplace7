import React from 'react'
import SearchIcon from "@material-ui/icons/Search";

export class filtro extends React.Component {
    render() {
        return
        <Filtros>

            <h3>Filtros</h3>

            <minimo>
                Valor mínimo:
                <input
                type= "number"
                value= ""
                />
            </minimo>

            <maximo>
                Valor máximo:
                <input
                type= "number"
                value= ""
                />
            </maximo>

            <categoria>
                Vategoria:
                <input
                type= "text"
                value= ""
                />
            </categoria>

            <nome>
                Categoria:
                <input
                type= "text"
                value= ""
                />
            </nome>

        </Filtros>
    }
}