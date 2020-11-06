import React from 'react'


export  default class ordenar extends React.Component {
    
  state={

    sort:''
  }
  //.sort((a,b,c)=>this.state.sort === 'casa' ? a.category)
  
  render() {
       
      
      return( 
       
      <label>
        Ordenar:
          <select value={this.state.sort}>
            <option>Selecionar</option>
            <option value={'casa'}>Casa</option>
            <option value={'jardim'}>Jardim</option>
            <option value={'festa'}>Festa</option>
          </select>
      </label>
    )
    
  


 }}
