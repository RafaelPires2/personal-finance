import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationPasswordAndEmail } from "../../contexts/formValidation/formValidation";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CustomInput } from "../../components/CustomInput";
import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";
import { CustomButton } from "../../components/CustomButton";

export function Login() {
  const [validated, setValidated] = useState(false);
  const auth = useContext(AuthContext);
  // Esses estados foram criados para validação dos dados de usuario e senha e mostrar o erro.
  const [showError, setShowError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidationPasswordAndEmail),
  });

  // monitora os campos email e password enquanto são preenchidos
  const checkFilling = watch(["email", "password"]);

  // verifica se os campos preenchidos são válidos, função usada para desabilitar e habilitar o botão entrar
  schemaValidationPasswordAndEmail
    .isValid({ email: checkFilling[0], password: checkFilling[1] })
    .then((valid) => {
      if (valid) setValidated(true);
      else {
        if (validated) setValidated(false);
      }
    });

  const handleLogin = async (data: any) => {
    const isLogged = await auth.signin(data.email, data.password);
    if (isLogged) {
      return navigate("/dashboard");
    } else {
      setFormSubmitted(true);
      setShowError(true);
    }
  };
  return (
    <Wrapper>
      <Header />
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1 className="title">Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <CustomInput
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            <CustomInput
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
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
              <CustomButton
                width="138"
                height="40"
                variant="btnVariant1"
                textColor="white"
                content="Login"
                type="submit"
                disabled={!validated}
              />
              <Link to="/register">
                <CustomButton
                  width="160"
                  height="40"
                  variant="btnVariant2"
                  textColor="#BDBDBD"
                  content="Criar Conta"
                  type="button"
                />
              </Link>
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
