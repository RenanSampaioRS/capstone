import styled from "styled-components";
import { COLORS } from "../../stylesGlobal";
export const Mybutton = styled.button`
  margin-top: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 120px;
  height: 40px;
  border-radius: 40px;
  color: white;
  outline: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
export const DivPrincipal = styled.div`
  background-color: ${COLORS.cinza};
  color: ${COLORS.roxo};
  border-radius: 20px;
  text-align: center;
  margin: 20px auto;
  width: 250px;
  height: auto;
  padding: 10px;
  :hover {
    box-shadow: 5px 5px 5px ${COLORS.branco};
  }
`;