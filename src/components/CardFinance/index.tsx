import React from "react";
import { ContainerCardFinance } from "./styles";

type ChildrenProps = {
  children: React.ReactNode;
};

export function CardFinance({ children }: ChildrenProps) {
  return (
    <>
      <ContainerCardFinance>{children}</ContainerCardFinance>
    </>
  );
}
