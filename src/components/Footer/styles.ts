import styled from "styled-components";

export const WrapperFooter = styled.footer`
  width: 100vw;
  height: 15vh;
  background-color: ${(props) => props.theme.var10};
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.footer`
  width: 120rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.white};
`;
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
