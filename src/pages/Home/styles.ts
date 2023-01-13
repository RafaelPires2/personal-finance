/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 120rem;
    height: calc(100vh - 4.6rem);
    margin-top: 2rem;
    

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: antiquewhite;
`

export const ContainerImageAndText = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80vh;
    padding-top: 2rem;

    gap: 2rem;

    background-color: aliceblue;
    
    .conteinerA{
        width: 50rem;
        background-color: red;
    }

    .conteinerB{
        font-size: 3rem;
        
    }
`;
