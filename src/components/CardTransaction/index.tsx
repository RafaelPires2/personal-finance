import { ChildrenProps } from "../CardFinance";
import { ContainerCardTransaction } from "./styles";

export function CardTransaction({ children }: ChildrenProps) {
  return (
    <>
      <ContainerCardTransaction>{children}</ContainerCardTransaction>
    </>
  );
}
