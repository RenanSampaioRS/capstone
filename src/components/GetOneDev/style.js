import styled from 'styled-components'
import { COLORS } from '../../stylesGlobal'

export const InputPesq = styled.input`
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
  @media (min-width: 600px){
    width: 99%;
  }
`

export const DivP  = styled.div`
    width: 98%;
    @media (min-width: 600px){
        width: 48%;
    }
    @media (min-width: 800px){
        width: 40%;
    }
`
export const DivB = styled.div`
     margin: 0 0 0 5px;
     width: 98%;
    @media (min-width: 600px){
        width: 48%;
    }
    @media (min-width: 800px){
        width: 30%;
    }
`

export const DivPesque = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 600px){
        display:flex;
        flex-direction: row; 
        flex-wrap: wrap;
    }
`