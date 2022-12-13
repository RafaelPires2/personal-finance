import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { Button, ButtonSubmit } from "../../components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationPasswordAndEmail } from "../../contexts/formValidation/formValidation";
import { useNavigate } from "react-router-dom";

import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationPasswordAndEmail),
  });

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Dashboard");
  }

  return (
    <Wrapper>
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1>Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <input type="email" placeholder="Email" {...register("email")} />
            <p className="message-error error1">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
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
