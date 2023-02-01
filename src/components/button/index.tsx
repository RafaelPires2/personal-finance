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
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export function ButtonSubmit({
  textContent,
  variant,
  textColor,
  SizeW,
  disabled,
}: ButtonProps) {
  return (
    <ButtonContainer
      type="submit"
      SizeW={SizeW}
      textColor={textColor}
      variant={variant}
      disabled={disabled}
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
      SizeW={SizeW}
      textColor={textColor}
      variant={variant}
    >
      {textContent}
    </ButtonContainer>
  );
}
