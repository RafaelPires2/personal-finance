import React from "react";
import { ContainerCardFinance } from "./styles";

export type ChildrenProps = {
  children: React.ReactNode;
};

export function CardFinance({ children }: ChildrenProps) {
  return (
    <>
      <ContainerCardFinance>{children}</ContainerCardFinance>
    </>
  );
}
