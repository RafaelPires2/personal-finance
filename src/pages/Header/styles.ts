import styled from "styled-components";

export const WrapperHeader = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8rem;

  background-color: ${(props) => props.theme.var7};

  position: fixed;
  top: 0;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.var5};
    margin-right: 5rem;
  }
  a {
    font-size: 1.6rem;
    padding-left: 2rem;
    color: ${(props) => props.theme.var5};
    text-decoration: none;
  }
`;
