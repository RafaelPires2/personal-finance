import styled from "styled-components";

export type ButtonVariant = "btnVariant1" | "btnVariant2";
export type TextButton = "primary" | "secondary";
export type WidthButton = "103" | "122" | "138" | "160" | "192";

interface ButtonContainerProps {
  variant: ButtonVariant;
  textColor: TextButton;
  WidthButton: WidthButton;
}

const buttonVariants = {
  btnVariant1: "#3AB67D",
  btnVariant2: "#F0F0F0",
  primary: "#FFFFFF",
  secondary: "#BDBDBD",
  103: "103px",
  122: "122px",
  138: "138px",
  160: "160px",
  192: "192px",
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
