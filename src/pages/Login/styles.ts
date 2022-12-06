import styled from "styled-components";
import imgLoginRight from "../../assets/img-login.svg";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCardLogin = styled.section`
  width: 76rem;
  height: 46rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.white};
  border-radius: 20px;

  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.6);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const BaseCardLogin = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardLoginLeft = styled(BaseCardLogin)`
  ${BaseCardLogin};
  background: ${(props) => props.theme.white};
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  padding-left: 3rem;

  input {
    width: 32rem;
    height: 4rem;

    border: 1px solid ${(props) => props.theme.var9};
    border-radius: 8px;

    padding: 13px 8px;
    font-size: 1.4rem;

    ::placeholder {
      color: ${(props) => props.theme.var9};
    }
  }
`;

export const CardLoginRight = styled(BaseCardLogin)`
  background-image: url(${imgLoginRight});
  background-repeat: no-repeat;
  background-position: center;

  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid black;

  color: ${(props) => props.theme.white};
  gap: 2rem;
  padding-left: 9.2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 900;
  }

  p {
    font-size: 1.6rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
