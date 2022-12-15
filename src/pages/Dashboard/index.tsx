import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Header } from "../Header";
import { Wrapper } from "../Login/styles";

export function Dashboard() {

  return (
    <>
      <Header />
      <Wrapper>
        <h1>Página Dashboard</h1>
      </Wrapper>
    </>
  );
}
