import { CardFinance } from "../../components/CardFinance";
import { MenuDashboard } from "../../components/MenuDashboard";
import { BsArrowUpRight, BsArrowDownRight, FaEquals } from "react-icons/all";
import {
  ContainerDashboard,
  WrapperDashboard,
  WrapperFinanceCenter,
  WrapperFinanceRight,
} from "./styles";
import { WrapperCardFinance } from "../../components/CardFinance/styles";

export function Dashboard() {
  return (
    <>
      <WrapperDashboard>
        <MenuDashboard />
        <ContainerDashboard>
          <WrapperFinanceCenter>
            <div className="welcome-user">
              <strong>
                Bem vindo novamente, <span>Rafael</span> 👋
              </strong>
              <p>Confira seus rendimentos</p>
            </div>

            <WrapperCardFinance>
              <CardFinance>
                <div className="icon-finance icon-finance1">
                  <BsArrowUpRight size={25} color="white" />
                </div>

                <div className="finance-values">
                  <p>Total Entrada</p>
                  <strong>R$ 1.541,00</strong>
                </div>

                <div className="finance-porcent positive">
                  <span>+1.29%</span>
                </div>
              </CardFinance>

              <CardFinance>
                <div className="icon-finance icon-finance2">
                  <BsArrowDownRight size={25} color="white" />
                </div>

                <div className="finance-values">
                  <p>Total saídas</p>
                  <strong>R$ 1.541,00</strong>
                </div>

                <div className="finance-porcent negative">
                  <span>-1.29%</span>
                </div>
              </CardFinance>

              <CardFinance>
                <div className="icon-finance icon-finance3">
                  <FaEquals size={25} color="white" />
                </div>

                <div className="finance-values">
                  <p>Total Resumo</p>
                  <strong>R$ 1.541,00</strong>
                </div>

                <div className="finance-porcent negative">
                  <span>-1.29%</span>
                </div>
              </CardFinance>
            </WrapperCardFinance>
          </WrapperFinanceCenter>

          <WrapperFinanceRight>
            <h1>Rafael</h1>
          </WrapperFinanceRight>
        </ContainerDashboard>
      </WrapperDashboard>
    </>
  );
}
