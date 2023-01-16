import { Button } from "../../components/Button";
import { Header } from "../Header";
import { Wrapper } from "../Login/styles";
import imgPersonHome from "../../assets/img-person-home.svg";
import imgUser from "../../assets/user1.svg";
import imgClock from "../../assets/clock.svg";
import {
  ContainerImageAndText,
  ContainerA,
  ContainerB,
  HomeWrapper,
  ContainerC,
  CardCreateAccountText,
  CardSocialApproval,
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
            <ContainerC>
              <CardSocialApproval>
                <div className="box-user-img-name">
                  <img src={imgUser} />
                  <div>
                    <h2>Guilherme Pierre</h2>
                    <p>Art Director / UX / UI / Strategy manager</p>
                  </div>
                </div>

                <p>
                  Eu tenho usado o MyFinance há alguns meses e tem sido
                  incrivelmente útil para manter minhas contas em ordem, e ver
                  onde posso economizar dinheiro. Além disso, a plataforma é
                  fácil de usar e tem muitos recursos úteis.
                </p>
              </CardSocialApproval>
              <img className="img-clock" src={imgClock} />
              <CardCreateAccountText>
                <span>01.</span>
                <p>Crie sua conta grátis no MyFinance</p>
              </CardCreateAccountText>
              <CardCreateAccountText>
                <span>02.</span>
                <p>Organize suas finanças, registre suas despesas e receitas</p>
              </CardCreateAccountText>
              <CardCreateAccountText>
                <span>03.</span>
                <p>Transforme sua vida e conquiste seus sonhos </p>
              </CardCreateAccountText>
            </ContainerC>
          </ContainerImageAndText>
        </HomeWrapper>
      </Wrapper>
    </>
  );
}
