import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ContainerHeader, ContainerLink, Title, WrapperHeader } from "./styles";

export function Header() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    // eslint-disable-next-line no-self-assign
    window.location.href = window.location.href;
  };

  return (
    <WrapperHeader>
      <ContainerHeader>
        <Title>MyFinance</Title>
        <ContainerLink>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">DashBoard</Link>
        </ContainerLink>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </ContainerHeader>
    </WrapperHeader>
  );
}
