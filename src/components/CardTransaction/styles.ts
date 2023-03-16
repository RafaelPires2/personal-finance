import styled from "styled-components";

export const ContainerCardTransaction = styled.section`
  width: 100%;
  height: 100%;

  border-radius: 20px;
  background-color: ${(props) => props.theme.dark1};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  padding: 2rem 2.5rem;
`;

export const HeaderTransaction = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  gap: 1.6rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    width: 50%;
    color: white;
  }

  input {
    margin: 0;
  }
`;
