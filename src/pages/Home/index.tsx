import { Link } from "react-router-dom";
import { Wrapper } from "../Login/styles";

export function Home() {
  return (
    <Wrapper>
      <h1>Página Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </Wrapper>
  );
}
