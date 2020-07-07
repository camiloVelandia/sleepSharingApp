import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--light2-color);
  text-align: left;
  width: 100vw;
  justify-content: center;
  padding: 40px 0;
`;
export const Place = styled.div`
  width: 45%;
  & h2 {
    font-size: 30px;
    color: #456990;
  }
  & p {
    max-width: 80%;
    color: #456990;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    & h2 {
      font-size: 20px;
      color: #456990;
    }
    & p {
      max-width: 80%;
      color: #456990;
      font-size: 14px;
    }
  }
`;
export const Accesories = styled.div`
  width: 45%;
  & h2 {
    font-size: 30px;
    color: #456990;
  }
  & p {
    max-width: 80%;
    color: #456990;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    & h2 {
      font-size: 20px;
      color: #456990;
    }
    & p {
      max-width: 80%;
      color: #456990;
      font-size: 14px;
    }
  }
`;
export const Anfitrion = styled.div`
  width: 45%;
  display: flex;
  & figure {
    width: 60px;
    margin: 0;
  }
  & p {
    max-width: 80%;
    color: #456990;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    display: block;
    & p {
      max-width: 80%;
      color: #456990;
      font-size: 14px;
    }
  }
`;
export const Contact = styled.div`
  width: 45%;
  & h2 {
    font-size: 30px;
    color: #456990;
  }

  & div {
    text-align: center;
    & a {
      color: #456990;
      padding: 0 20px;
      font-size: 35px;
    }
  }
  @media (max-width: 768px) {
    & h2 {
      font-size: 20px;
      color: #456990;
    }
    & p {
      max-width: 80%;
      color: #456990;
      font-size: 14px;
    }
  }
`;
