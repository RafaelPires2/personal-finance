import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { WrapperHeader } from "./styles";

export function Header() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <WrapperHeader>
      <h1>MyFinance</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">DashBoard</Link>
      {auth.user && <button onClick={handleLogout}>Sair</button>}
    </WrapperHeader>
  );
}
