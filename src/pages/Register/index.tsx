import { AiOutlineCheckCircle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationNameAndPasswordAndEmail } from "../../contexts/formValidation/formValidation";
import { useNavigate } from "react-router-dom";
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

export function Register() {
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
    resolver: yupResolver(schemaValidationNameAndPasswordAndEmail),
  });

  // monitora os campos email e password enquanto são preenchidos
  const checkFilling = watch(["name", "email", "password"]);

  const handleRegister = async (data: any) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    if (newUser) {
      await auth.register(data.name, data.email, data.password);
      alert("Usuário cadastrado com sucesso");
      return navigate("/login");
    } else {
      return alert("Não cadastrado");
    }
  };

  // verifica se os campos preenchidos são válidos, função usada para desabilitar e habilitar o botão entrar
  schemaValidationNameAndPasswordAndEmail
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
          <h1 className="title">Register</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleRegister)}>
            <CustomInput
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {/* @ts-ignore */}
            <p className="message-error error1">{errors.name?.message}</p>
            <CustomInput
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {/* @ts-ignore */}
            <p className="message-error error1">{errors.email?.message}</p>
            <CustomInput
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
              <p>Aceito os termos</p>
            </div>
            <div className="field-btns">
              <CustomButton
                width="138"
                height="40"
                variant="btnVariant1"
                textColor="white"
                content="Criar Conta"
                type="submit"
              />

              <CustomButton
                width="160"
                height="40"
                variant="btnVariant2"
                textColor="#BDBDBD"
                content="Login"
                type="button"
                link="/login"
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
