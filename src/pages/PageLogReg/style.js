// import {COLORS} from '../../stylesGlobal'
import styled from 'styled-components'
import { COLORS } from '../../stylesGlobal'


export const TextForm = styled.div`
  margin: auto;
  width: 95%;
  text-align: end;

  .btn-Comp{
    margin-right: 5%;

    @media(min-width: 600px){
      width: 10%;
    }
  }

  button{
    background-color: rgba(0,0,0,0.0);
    color: #fff;
    font-size: 20px;
    border: none; 
    :focus{
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }

  @media(min-width: 600px){
    width: 55%;
  }

`

export const TextContent = styled.div`

  padding: 40px 5px 5px 20px ;
  width: 85%;
  text-align: justify;
  font-size: 17px;

  h3{
    margin-top: 20px;
  }

  @media(min-width: 860px){
    width: 35%;
  }

`

export const DivPai = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 860px){
    display: flex;
    flex-direction: column;
  }

  .divHead{
    text-align: center;
    color: ${COLORS.branco};
    h1{
        font-size: 50px;
      }
    img{
        width:150px;
      }

    @media(min-width: 860px){
      width: 99%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:250px;
      }
      h1{
        font-size: 50px;
      }
    }
  }

  .divContent{
    display: flex;
    flex-direction: column;
    h3{
        font-size:40px;
        text-align: center;
      }

    @media(min-width: 860px){
      display: flex;
      flex-direction: row-reverse;
      h3{
        font-size:40px;
        text-align: center;
      }
    }
  } 

`