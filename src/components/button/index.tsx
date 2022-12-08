import {
  ButtonContainer,
  ButtonVariant,
  TextButton,
  WidthButton,
} from "./styles";

interface ButtonProps {
  textContent: string;
  variant: ButtonVariant;
  textColor: TextButton;
  SizeW: WidthButton;
}

export function ButtonSubmit({
  textContent,
  variant,
  textColor,
  SizeW,
}: ButtonProps) {
  return (
    <ButtonContainer
      type="submit"
      WidthButton={SizeW}
      textColor={textColor}
      variant={variant}
    >
      {textContent}
    </ButtonContainer>
  );
}

export function Button({
  textContent,
  variant,
  textColor,
  SizeW,
}: ButtonProps) {
  return (
    <ButtonContainer
      type="button"
      WidthButton={SizeW}
      textColor={textColor}
      variant={variant}
    >
      {textContent}
    </ButtonContainer>
  );
}
