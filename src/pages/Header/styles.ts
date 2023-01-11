import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 4.6rem;

  //background-color: ${(props) => props.theme.var7};
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120rem;
  margin: 2.4rem 3.6rem;

  position: fixed;
  top: 0;
`;

export const ContainerLink = styled.a`
  margin-inline-start: 100px;
  a {
    font-size: 1.6rem;
    margin: 2rem;
    color: ${(props) => props.theme.var2};
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.var2};
  margin-right: 5rem;
`;
