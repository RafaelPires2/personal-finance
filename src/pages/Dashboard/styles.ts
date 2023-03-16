/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const WrapperDashboard = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.dark0};

    display: flex;
`

export const ContainerDashboard = styled.main`
    width: 80%;
    height: 100vh;

    display: flex;
`;

export const WrapperFinanceCenter = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
    height: 100vh;
    margin-inline: 2.6rem;

    .welcome-user{
        margin-block: 3.6rem;
    }

    strong {
        color: white;
        font-size: 2.4rem;
        font-weight: 600;
    }
    p {
       color: #A6A6A6 ;
       font-size: 1.6rem;
       font-weight: 400;
    }
`;

export const WrapperFinanceRight = styled.div`
    display: flex;
    flex-direction: column;

    width: 30%;
    height: 100vh;
`;