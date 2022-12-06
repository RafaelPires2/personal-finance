import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";

import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";

export function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1>Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </form>
          <div className="forgot-pass">
            <p>Forgot your password?</p>
          </div>
          <div className="field-sign">
            <p>Sign In with</p>
            <FcGoogle size={32}/>
          </div>
          <div className="field-btns">
            <Button textContent="Sign In" variant="btnVariant1" />
            <Button textContent="Sign Up" variant="btnVariant2" />
          </div>
        </CardLoginLeft>
        <CardLoginRight>
          <h2>Features</h2>
          <p>
            <AiOutlineCheckCircle size={24} /> 100% Free Sign Up
          </p>
          <p>
            <AiOutlineCheckCircle size={24} /> Free register company
          </p>
          <p>
            <AiOutlineCheckCircle size={24} /> More notes
          </p>
          <p>
            <AiOutlineCheckCircle size={24} /> More notes
          </p>
        </CardLoginRight>
      </WrapperCardLogin>
    </Wrapper>
  );
}
