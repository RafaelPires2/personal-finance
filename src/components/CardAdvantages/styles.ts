import styled from "styled-components";

export const ContainerCardAdvantages = styled.div`
  div {
    width: 27.8rem;
    height: 37.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    box-shadow: 10px 10px 40px rgba(192, 197, 233, 0.6);
    border-radius: 20px;
    padding: 0rem 2rem 0rem 2rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    margin-block: 4rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.var5};
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.var6};
    margin-bottom: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    width: 27.8rem;
    height: 6.4rem;
    color: white;
    background-color: ${(props) => props.theme.var2};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
