import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonVariant = "btnVariant1" | "btnVariant2" | "btnVariant3";

export type ButtonContainerProps = {
  width: string;
  height: string;
  textColor: string;
  variant: ButtonVariant;
} & ButtonType;

const buttonVariants = {
  btnVariant1: "#3AB67D",
  btnVariant2: "#F0F0F0",
  btnVariant3: "#AD3333",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.textColor};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  font-size: 1.4rem;
  padding: 1.5rem;
  cursor: pointer;

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}
    `;
  }};
`;
