import React from 'react';
import styled from 'styled-components'

const Footer = styled.div `
  text-align: center;
   bottom: 0;
   width: 100%;
   background-color: #605b57;
   position: fixed;
   color: white;
    padding-bottom: 10px;
`

class Rodape extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Rodape;