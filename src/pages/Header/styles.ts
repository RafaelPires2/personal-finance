import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 4.6rem;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120rem;
  margin-block: 2.4rem;

  position: absolute;
  top: 0;
`;

export const ContainerLink = styled.a`
  a {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 2rem;
    color: ${(props) => props.theme.var2};
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 3rem;
  color: ${(props) => props.theme.var2};
`;
