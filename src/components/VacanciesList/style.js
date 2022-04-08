import styled from 'styled-components';
import { COLORS } from '../../stylesGlobal';
import Rotate from 'react-awesome-reveal';

export const Animation = styled(Rotate)`
    z-index: 1;
`

export const DivPrincipal = styled.div`
     background-color: ${COLORS.cinza};
    color: ${COLORS.roxo};
    border-radius: 20px;
    text-align: center;
    margin: 20px auto;
    width: 250px;
    height: auto;
    padding: 10px;

    :hover{ 
        box-shadow: 5px 5px 5px ${COLORS.branco};
    }
`

export const  DivChecked = styled.div`
    text-align: start;
    padding: 10px 10px 10px 10px;
    column-count: 2;

    div{
        margin: 5px;

        label{
            margin: 0 5px;
        }
    }
`

export const Btn = styled.button`
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

export const DivVaga = styled.div`
    background-color: ${COLORS.cinza};
    color: ${COLORS.roxo};
    width: 200px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 10px;
    padding: 15px;
    :hover{
        box-shadow: 5px 5px 5px ${COLORS.branco};
    }
`