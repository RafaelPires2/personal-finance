import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Página Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
}
