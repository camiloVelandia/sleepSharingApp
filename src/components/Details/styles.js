import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f2f2f2;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 42px;
  padding: 20px;
  margin: 0 auto;
  width: 95%;
  border-bottom: 1px solid #dadada;
`;
export const H2 = styled.h2`
  text-align: left;
  font-size: 24px;
  padding: 30px 0 0 0;
  margin: 0 auto;
  width: 80%;
`;
export const CaroselContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;
export const InfoContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  padding-bottom: 50px;
  color: #456990;
  flex-direction: row;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;

    align-items: center;
    & div {
      width: 70%;
    }
  }
`;
export const Ubicacion = styled.div`
  width: 50%;
  text-align: left;
  & h2 {
    font-size: 18px;
  }
  & div {
    display: flex;
  }
  & p {
    margin: 0;
    padding-left: 10px;
  }
`;
export const Costo = styled.div`
  width: 25%;
  text-align: left;
  & h2 {
    font-size: 18px;
  }
  & p > i {
    padding-right: 10px;
  }
`;
export const Services = styled.div`
  width: 25%;
  text-align: left;
  & h2 {
    font-size: 18px;
  }
  & div {
    display: flex;
    justify-content: space-around;
  }
`;
