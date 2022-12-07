import styled from "styled-components";

export type ButtonVariant = "btnVariant1" | "btnVariant2";
export type TextButton = "primary" | "secondary";

interface ButtonContainerProps {
  variant: ButtonVariant;
  textColor: TextButton;
}

const buttonVariants = {
  btnVariant1: "#3AB67D",
  btnVariant2: "#F0F0F0",
  primary: "#FFFFFF",
  secondary: "#BDBDBD",
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
  cursor: pointer;

  ${(props) => {
    return `color: ${buttonVariants[props.textColor]}
    `;
  }};

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}
    `;
  }}
`;
