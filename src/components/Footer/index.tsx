import {
  Circle,
  ContainerFooter,
  ContainerIcons,
  Title,
  WrapperFooter,
} from "./styles";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/all";

export function Footer() {
  return (
    <>
      <WrapperFooter>
        <ContainerFooter>
          <Title>MyFinance</Title>

          <ContainerIcons>
            <Circle
              onClick={() =>
                window.open("http://localhost:3001/login", "_blank")
              }
            >
              <AiFillYoutube size={25} />
            </Circle>
            <Circle
              onClick={() =>
                window.open("http://localhost:3001/login", "_blank")
              }
            >
              <AiFillLinkedin size={25} />
            </Circle>
            <Circle
              onClick={() =>
                window.open("http://localhost:3001/login", "_blank")
              }
            >
              <AiFillInstagram size={25} />
            </Circle>
          </ContainerIcons>
        </ContainerFooter>
      </WrapperFooter>
    </>
  );
}
