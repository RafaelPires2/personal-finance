import styled from "styled-components";

export const ContainerAsideDashboard = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.dark1};
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  height: 100vh;
  width: 20%;
`;

export const Title = styled.h1`
  margin-block: 6rem;
  font-size: 3rem;
  color: ${(props) => props.theme.white};
`;

export const ContainerLinkDashboard = styled.nav`
  width: 80%;

  a {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
  }
`;

export const ButtonNavDashboard = styled.button`
  width: 100%;
  height: 57px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  margin-bottom: 1.6rem;

  font-size: 1.6rem;
  font-weight: 600;

  background-color: transparent;
  border: none;

  :hover {
    background-color: ${(props) => props.theme.dark2};
    border-radius: 10px;
  }
`;

export const ContainerToggle = styled.div`
  width: 80%;
  height: 57px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  margin-bottom: 1.6rem;
  color: white;

  font-size: 1.6rem;
  font-weight: 600;

  margin-bottom: 60%;
`;

export const LineDashboard = styled.hr`
  width: 80%;
  border-color: #4b4b99;
  margin-block: 1rem;
`;

export const ContainerUser = styled.div`
  width: 80%;
  height: 8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 2rem;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: #f0f0fb;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  img {
    width: 80px;
    border-radius: 50%;
  }
`;
