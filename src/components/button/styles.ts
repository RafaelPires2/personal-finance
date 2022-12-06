import styled from "styled-components";

export type ButtonVariant = "btnVariant1" | "btnVariant2";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  btnVariant1: "#3AB67D",
  btnVariant2: "#F0F0F0",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  height: 4rem;
  font-size: 1.4rem;
  padding: 1.5rem;

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }}
`;
