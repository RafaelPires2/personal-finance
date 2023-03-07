import { forwardRef, InputHTMLAttributes } from "react";
import { ImputContainer } from "./styles";

interface CustomImputProps extends InputHTMLAttributes<HTMLInputElement> {}

// capturar as mudanças usando register
function CustomInputBase(
  { type, placeholder, ...props }: CustomImputProps,
  ref: any
) {
  return (
    <>
      <ImputContainer
        type={type}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </>
  );
}

export const CustomInput = forwardRef(CustomInputBase);
