import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonTypeProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonContainerProps = {
  width: string;
  height: string;
  textColor: string;
  content: string;
  variant: any;
  type: "submit" | "button" | "reset";
} & ButtonTypeProps;

export function CustomButton({
  width,
  height,
  textColor,
  content,
  type,

  ...props
}: ButtonContainerProps) {
  return (
    <>
      <ButtonContainer
        width={width}
        height={height}
        textColor={textColor}
        type={type}
        {...props}
      >
        {content}
      </ButtonContainer>
    </>
  );
}
