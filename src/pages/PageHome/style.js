import styled from 'styled-components';
import { COLORS } from '../../stylesGlobal';

export const Div = styled.div`

    text-align: center;
    background-color: ${COLORS.cinza};
    color: ${COLORS.roxo};
        
    border: 1px solid white;
    padding: 10px;
    margin: 10px;
    width: 85%;
    height: auto;

    div{
        border: 1px double white;
        padding: 5px;
    }

    :hover{
        box-shadow: 5px 5px 5px ${COLORS.branco};
    }
    

    @media (min-width: 900px){
        width: 30%;
    }

`