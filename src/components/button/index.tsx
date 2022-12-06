import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  textContent: string;
  variant: ButtonVariant;
}

export function Button({ textContent, variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>{textContent}</ButtonContainer>;
}
