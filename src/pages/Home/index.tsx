import { Header } from "../Header";
import { Wrapper } from "../Login/styles";
import { ContainerImageAndText, HomeWrapper } from "./styles";

export function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <HomeWrapper>
          <ContainerImageAndText>
            <div className="conteinerA">
              <img src="./assets/hospital.svg" alt="" />
            </div>
            <div className="conteinerB">
              <h1>Página Home</h1>
            </div>
          </ContainerImageAndText>
        </HomeWrapper>
      </Wrapper>
    </>
  );
}
