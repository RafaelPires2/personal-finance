import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

// capturar as mudanças usando register
function CustomInputBase(
  { type, placeholder, ...props }: CustomInputProps,
  ref: any
) {
  return (
    <>
      <InputContainer
        type={type}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </>
  );
}

export const CustomInput = forwardRef(CustomInputBase);
