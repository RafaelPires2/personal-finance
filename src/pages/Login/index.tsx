import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { Button, ButtonSubmit } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationPasswordAndEmail } from "../../contexts/formValidation/formValidation";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import user from "../../../mock/user.json";

import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";

export function Login() {
  const [validated, setValidated] = useState(false);
  // Esses estados foram criados para validação dos dados de usuario e senha e mostrar o erro.
  const [showError, setShowError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidationPasswordAndEmail),
  });

  function handleFormOnSubmit(data: any) {
    setFormSubmitted(true);
    if (data.email !== user.email || data.password !== user.password) {
      setShowError(true);
    } else {
      navigate("/dashboard");
    }
  }

  // const handleLogin = async (data: any) => {
  //   if (data.email && data.password) {
  //     const isLogged = await auth.signin(data.email, data.password);
  //     if (isLogged) {
  //       navigate("/dashboard");
  //     } else {
  //       alert("Email ou Senha inválidos");
  //     }
  //     console.log(isLogged);
  //   }
  // };

  // monitora os campos email e password enquanto são preenchidos
  const checkFilling = watch(["email", "password"]);

  // verifica se os campos preenchidos são válidos, função usada para desabilitar e abilitar o botão entrar
  schemaValidationPasswordAndEmail
    .isValid({ email: checkFilling[0], password: checkFilling[1] })
    .then((valid) => {
      if (valid) setValidated(true);
      else {
        if (validated) setValidated(false);
      }
    });

  return (
    <Wrapper>
      <Header />
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1>Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleFormOnSubmit)}>
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
            <p className="message-error">
              {formSubmitted && showError && "Email ou Senha inválidos"}
            </p>

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
                disabled={!validated}
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
