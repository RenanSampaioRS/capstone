import styled, { createGlobalStyle } from 'styled-components'

export const COLORS = {
  branco: '#ffffff',
  azulClaro: '#66c8e3',
  roxo: '#301d3d',
  bege: '#b8a984',
  cinza: "#b8b6b6"
}

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: consolas;
  }

  body{
    width: 100%;
    height: 100%;
    background-color: ${COLORS.roxo};
    color: ${COLORS.bege};
  }

`
export const Button = styled.button`
  background-color: ${COLORS.branco};
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  margin: 20px 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  :hover{
    background: rgba(0,0,0,0.0);
    color: ${COLORS.azulClaro};
    border: 3px solid ${COLORS.azulClaro};
  }

`

export const Input = styled.input`
  font-size: 15px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  outline: none;

  transition: .2s ease-in-out;
  box-sizing: border-box;

  :focus{
    background: rgba(0,0,0,0.0);
    color: ${COLORS.branco};
    font-weight: 900;
  }
`

export const InputProfile = styled.input`
  font-size: 15px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  width: 99%;
  outline: none;

  transition: .2s ease-in-out;
  box-sizing: border-box;

  :focus{
    background: rgba(0,0,0,0.0);
    color: ${COLORS.branco};
    font-weight: 900;
  }
`

export const Seletor = styled.select`
 font-size: 15px;
  margin: 5px 0 0 10px;
  padding: 10px;
  border-radius: 10px;

`

export const DivComp = styled.div`
  width: 98%;
  text-align: center;
  margin: auto;
   
   h1{
       font-size: 22px;
   }

   @media (min-width: 900px){
    width: 75%;
    margin: 0;
   }

`
export const BtnAtt = styled.button`
    font-size: 15px;
    border-radius: 5px;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 99%;
    margin: 10px 0 0 0;

    :hover{
        color: white;
        background-color: black;
    }

`

export const DivAvatar = styled.div`
padding:20px;
  img{
    width: 150px;
    height:150px;
    border-radius: 50%;
    background-color: red;
  }
  @media(min-width: 900px ){
    img{
      width: 300px;
      height:300px;
      border-radius: 50%;
      background-color: red;
    }
  }
`
export const DivProfile = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media(min-width: 900px ){
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
export const DivOption = styled.div`
    input{
      margin: 10px 5px 10px 10px;
    }
  @media(min-width: 900px ){
  }
`

export const  DivCheckeBox = styled.div`
    text-align: start;
    padding: 10px 10px 10px 10px;
    column-count: 2;

    div{
        margin: 5px;

        label{
            margin: 0 5px;
        }
    }

    @media (min-width: 500px){
        column-count: 3;
    }

    @media (min-width: 700px){
        column-count: 4;
    }
`