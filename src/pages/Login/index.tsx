import { AiOutlineCheckCircle, FcGoogle } from "react-icons/all";
import { useForm } from "react-hook-form";
import { Button, ButtonSubmit } from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  WrapperCardLogin,
  CardLoginLeft,
  CardLoginRight,
  Wrapper,
} from "./styles";

const schema = z.object({
  email: z.string().email("Email precisa ser válido"),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" })
    .max(12),
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleLogin = (data) => console.log(data);

  return (
    <Wrapper>
      <WrapperCardLogin>
        <CardLoginLeft>
          <h1>Sign In</h1>
          <p className="subtitulo">Its time to check Your business</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            <input type="email" placeholder="Email" {...register("email")} />
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />

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
