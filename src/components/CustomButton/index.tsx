import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles";

type ButtonTypeProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonContainerProps = {
  width: string;
  height: string;
  textColor: string;
  content: string;
  variant: any;
  link?: string;
  type: "submit" | "button" | "reset";
} & ButtonTypeProps;

export function CustomButton({
  width,
  height,
  textColor,
  content,
  type,
  link,
  ...props
}: ButtonContainerProps) {
  return (
    <>
      <Link to={link}>
        <ButtonContainer
          width={width}
          height={height}
          textColor={textColor}
          type={type}
          {...props}
        >
          {content}
        </ButtonContainer>
      </Link>
    </>
  );
}
