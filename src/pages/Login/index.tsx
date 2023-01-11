import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { Button, ButtonSubmit } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationPasswordAndEmail } from "../../contexts/formValidation/formValidation";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationPasswordAndEmail),
  });

  const handleLogin = async (data: any) => {
    if (data.email && data.password) {
      const isLogged = await auth.signin(data.email, data.password);
      if (isLogged) {
        navigate("/dashboard");
      } else {
        alert("Email ou Senha inválidos");
      }
      console.log(isLogged);
    }
  };

  return (
    <Wrapper>
      <Header />
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1>Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <input type="text" placeholder="Email" {...register("email")} />
            {/* @ts-ignore */}
            <p className="message-error error1">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {/* @ts-ignore */}
            <p className="message-error">{errors.password?.message}</p>

            <div className="forgot-pass">
              <p>Forgot your password?</p>
            </div>
            <div className="field-sign">
              <p>Sign In with</p>
              <FcGoogle size={32} />
            </div>
            <div className="field-btns">
              <ButtonSubmit
                SizeW="103"
                textColor="primary"
                textContent="Sign In"
                variant="btnVariant1"
              />
              <Button
                SizeW="160"
                textColor="secondary"
                textContent="Sign Up"
                variant="btnVariant2"
              />
            </div>
          </form>
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
