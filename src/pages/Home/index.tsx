import { Button } from "../../components/Button";
import { Header } from "../Header";
import { Wrapper } from "../Login/styles";
import imgPersonHome from "../../assets/img-person-home.svg";
import {
  ContainerImageAndText,
  ContainerA,
  ContainerB,
  HomeWrapper,
} from "./styles";
export function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <HomeWrapper>
          <ContainerImageAndText>
            <ContainerA>
              <img
                src={imgPersonHome}
                alt="imagem de um personagem masculino, feliz, segurando uma moeda em frente a um celular mostrando um cartão de crédito"
              />
            </ContainerA>
            <ContainerB>
              <span className="subtitle">Organize sua vida financeira</span>
              <h1 className="title">
                Esteja no controle e alcance seus sonhos
              </h1>
              <p className="paragraph">
                Transforme sua vida financeira agora. Cadastre-se gratuitamente
              </p>
              <div className="containerButton">
                <Button
                  textContent="Criar Conta"
                  SizeW="192"
                  textColor="primary"
                  variant="btnVariant1"
                />
                <a href="http://localhost:3000/login">
                  <Button
                    textContent="Login"
                    SizeW="122"
                    textColor="secondary"
                    variant="btnVariant2"
                  />
                </a>
              </div>
            </ContainerB>
          </ContainerImageAndText>
        </HomeWrapper>
      </Wrapper>
    </>
  );
}
