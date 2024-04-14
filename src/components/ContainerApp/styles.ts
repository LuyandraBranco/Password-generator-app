import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerItem = styled.div`
  width: 75%;
  height: 32rem;
  background: #14131a;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-top: 7rem;

  @media screen and (max-width: 680px) {
    width: 97%;
    margin-top: 4rem;
  }

  @media (min-width: 681px) and (max-width: 992px) {
    width: 97%;
  }
`;

export const Title = styled.h4`
  color: #fff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Password = styled.h2`
  color: #fff;
  font-weight: 600;
  margin-left: 10%;

  @media screen and (max-width: 680px) {
    font-size: 0.8rem;
  }
`;

export const CounterNumber = styled.h2`
  margin-left: auto;
  margin-right: 10%;
  font-size: 1.5rem;
  color: #a3fead;
`;

export const TitleContainer = styled.h4`
  margin-left: 10%;
`;

export const ContainerPassword = styled.section`
  width: 45%;
  height: 5rem;
  background: #24232a;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  > svg {
    margin-left: auto;
    margin-right: 9%;
    color: #a3fead;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 680px) {
    width: 97%;
  }

  @media (min-width: 681px) and (max-width: 992px) {
    width: 97%;
  }
`;

export const ContainerElements = styled.section`
  width: 45%;
  height: 30rem;
  background: #24232a;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  @media screen and (max-width: 680px) {
    width: 97%;
  }

  @media (min-width: 681px) and (max-width: 992px) {
    width: 97%;
  }
`;

export const InputRange = styled.input`
  width: 80%;
  background: #000;
  margin: 0.5rem 0;
  margin-left: 10%;
  margin-bottom: 4%;
`;

export const Strengt = styled.section`
  width: 80%;
  height: 3.4rem;
  background: #18171e;
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const Elements = styled.div`
  width: 100%;
  height: 10rem;
`;

export const Button = styled.button`
  width: 80%;
  height: 3rem;
  background: #a3fead;
  border: none;
  margin: 0.5rem 0;
  color: #333;
  cursor: pointer;
  font-weight: 600;
`;
