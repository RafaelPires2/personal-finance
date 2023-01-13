/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 120rem;
    height: calc(100vh - 4.6rem);
    margin-top: 2rem;
    

    display: flex;
    flex-direction: column;
    align-items: center;

   // background-color: antiquewhite;
`

export const ContainerImageAndText = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 8rem;
    gap: 2rem;

   // background-color: aliceblue;
`;

export const ContainerA = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 57rem;
  //  background-color: red;

    img{
        width: 100%;
        
    }
`;

export const ContainerB = styled.section`
    width: 40%;
    padding-top: 5rem;
    height: 57rem;
  //  background-color: red;

    .subtitle{
        font-size: 2.4rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var2};
    }
    .subtitle:before{
        background-color: ${(props) => props.theme.var4};
        content: "";
        display:flex;
        height: 2px;
        position: relative;
        vertical-align: middle;
        width: 80%;
        margin-bottom: 2rem;
        border-radius: 10px;
    }

    .title{
        max-width: 48.2rem;
        margin-block: 2rem;
        font-size: 4.8rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var5};
    }

    .paragraph{
        font-size: 1.6rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var6};
        margin-bottom: 4.5rem;
    }
    .containerButton{
        display: flex;
        gap: 2rem;

    }
`;
