import styled from 'styled-components';
import {COLORS} from '../../stylesGlobal';

export const Div =  styled.div`
  width: 100%;
  height: 10%;
  background-color: ${COLORS.cinza};

  button{
    background-color: rgba(0,0,0,0.0);
    color:  ${COLORS.roxo};
    font-size: 30px;
    border: none; 
    margin: 10px;

    :focus{ 
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }

    a{
        text-decoration: none;
        list-style: none;
        margin: 5px 30px 5px 0;
        font-weight: 900;
        :hover{
          color:  ${COLORS.branco};
        }
    } 

    @media (min-width: 800px){
      font-size: 40px;
      margin: 5px 40px 5px 0;
    }
}
`