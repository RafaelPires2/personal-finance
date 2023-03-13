import { Link } from "react-router-dom";
import {
  ContainerToggle,
  ContainerUser,
  LineDashboard,
  Title,
} from "../MenuDashboard/styles";
import {
  ButtonNavDashboard,
  ContainerAsideDashboard,
  ContainerLinkDashboard,
} from "./styles";
import {
  RxDashboard,
  BsFillHouseFill,
  CiSettings,
  AiOutlineUser,
  TbDeviceAnalytics,
  FaRegMoon,
} from "react-icons/all";

export const MenuDashboard = () => {
  return (
    <>
      <ContainerAsideDashboard>
        <Title>MyFinance</Title>

        <ContainerLinkDashboard>
          <Link to="/">
            <ButtonNavDashboard>
              <RxDashboard size={24} />
              Dashboard
            </ButtonNavDashboard>
          </Link>

          <Link to="/">
            <ButtonNavDashboard>
              <TbDeviceAnalytics size={24} />
              Analytics
            </ButtonNavDashboard>
          </Link>

          <Link to="/">
            <ButtonNavDashboard>
              <AiOutlineUser size={24} />
              Accounts
            </ButtonNavDashboard>
          </Link>

          <Link to="/">
            <ButtonNavDashboard>
              <CiSettings size={24} />
              Settings
            </ButtonNavDashboard>
          </Link>

          <Link to="/">
            <ButtonNavDashboard>
              <BsFillHouseFill size={24} />
              Home
            </ButtonNavDashboard>
          </Link>
        </ContainerLinkDashboard>

        <LineDashboard />

        <ContainerToggle>
          <FaRegMoon size={24} />
          Dark Mode
        </ContainerToggle>

        <ContainerUser>
          <img
            src="https://avatars.githubusercontent.com/u/86695046?v=4"
            alt="Foto do usuário"
          />

          <div>
            <strong>Rafael Pires</strong>
            <p>Web Developer</p>
          </div>
        </ContainerUser>
      </ContainerAsideDashboard>
    </>
  );
};
