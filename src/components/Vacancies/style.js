import styled from 'styled-components'

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

    @media (min-width: 500px){
        column-count: 3;
    }

    @media (min-width: 700px){
        column-count: 4;
    }
`

export const  DivCampos = styled.div`
    width: 98%;

    @media (min-width: 600px){
        width: 68%;
        margin: auto;
    }

    @media (min-width: 900px){
        width: 58%;
        margin: auto;
    }
`

export const  DivBotao = styled.div`
@media (min-width: 600px){
        width: 68%;
        margin: auto;
    }
 ` 