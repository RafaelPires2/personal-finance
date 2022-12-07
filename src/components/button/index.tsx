import { ButtonContainer, ButtonVariant, TextButton } from "./styles";

interface ButtonProps {
  textContent: string;
  variant: ButtonVariant;
  textColor: TextButton;
}

export function Button({ textContent, variant, textColor }: ButtonProps) {
  return (
    <ButtonContainer textColor={textColor} variant={variant}>
      {textContent}
    </ButtonContainer>
  );
}
