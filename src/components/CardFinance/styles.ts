import styled from "styled-components";

export const WrapperCardFinance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;

export const ContainerCardFinance = styled.div`
  width: 32%;
  height: 12.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  border-radius: 20px;
  background-color: ${(props) => props.theme.dark1};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .icon-finance {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }

  .icon-finance1 {
    background-color: ${(props) => props.theme.dark3};
  }

  .icon-finance2 {
    background-color: ${(props) => props.theme.dark2};
  }
  .icon-finance3 {
    background-color: ${(props) => props.theme.var2};
  }

  .finance-values {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      color: ${(props) => props.theme.textParagraphDark};
    }
  }

  .finance-porcent {
    display: flex;
    align-items: flex-end;
    height: 40%;

    span {
      width: 63px;
      height: 23px;
      font-size: 1.2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
    }
  }
  .positive {
    span {
      color: #02b15a;
      background: rgba(2, 177, 90, 0.15);
    }
  }

  .negative {
    span {
      color: #e41414;
      background: rgba(235, 0, 27, 0.15);
    }
  }
`;
