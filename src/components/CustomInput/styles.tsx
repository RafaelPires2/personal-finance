import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputContainer = styled.input<InputContainerProps>`
    width: 32rem;
    height: 4rem;
    border: 1px solid ${(props) => props.theme.var9};
    border-radius: 8px;

    padding: 13px 8px;
    font-size: 1.4rem;
    margin-bottom: 1.6rem ;
    ::placeholder {
      color: ${(props) => props.theme.var9}
`
