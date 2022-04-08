import { COLORS } from '../../stylesGlobal';
import styled from 'styled-components'

export const Boxes = styled.div`

  position: relative;
  width: 90%;
  height: auto;
  margin: 25px auto;
  transition: 0.5s;
  text-align: center;

  :hover{
    transform: translateY(-20px);
  }

  ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    background: linear-gradient(45deg, ${COLORS.roxo}, ${COLORS.azulClaro});
  }

  ::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(55deg,${COLORS.roxo}, ${COLORS.azulClaro});
    filter: blur(15px);
  }

  span{
    position: absolute;
    top:6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: rgba(0,0,0,0.6);
    z-index: 2;
  }

  @media(min-width: 600px){
    width: 500px;
  }
`

export const Content = styled.div`

  position: relative;
  z-index:10;
  padding: 40px 0 10px 0;

  a{
    color: ${COLORS.branco};
    text-decoration: none;
  }

`