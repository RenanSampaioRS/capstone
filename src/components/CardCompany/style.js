import styled from "styled-components";
import { COLORS } from "../../stylesGlobal";

export const DivPai = styled.div`
    background-color: ${COLORS.cinza};
    color: ${COLORS.roxo};
    width: 200px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 10px;
    padding: 15px;
  
    div{
        display: flex;
        align-items: center;
        text-align: center;
        div{
            width: 30%;
            height: 30%;
            margin: 4px;
            img{
                width: 50px;
                border-radius: 50%;
            }
        }
    }

    :hover{
        box-shadow: 5px 5px 5px ${COLORS.branco};
    }
`