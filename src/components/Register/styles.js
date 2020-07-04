import styled from 'styled-components';

export const Section = styled.section`
  background-color: f8f8f8;
  max-width: 1366px;
  color: #000;
  margin: 0 auto;
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
export const H1 = styled.h1`
  color: #555555;
  text-align: center;
  font-size: 24px;
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
export const H2 = styled.h2`
  display: block;
  max-width: 75%;
  margin: 0 auto;
  padding-bottom: 10px;
  font-size: 18px;
  & span {
    width: 45%;
  }
  @media (min-width: 1440px) {
    display: block;
    width: 67%;
  }
`;
export const FormGroup1 = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  & div {
    width: 45%;
    text-align: left;

    max-width: 360px;
  }
  & label {
    font-size: 18px;
    padding-right: 10px;
  }
  & input {
    border: 1px solid #ababab;
    height: 18px;
    width: 18px;
    color: #000;
  }
  @media (max-width: 767px) {
    width: 80%;
    & label {
      font-size: 12px;
    }
  }
`;

export const FormField = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
  }
`;
export const FormGroup2 = styled.div`
  width: 45%;
  & label > input {
    width: 100%;
    max-width: 360px;
    height: 50px;
    border: 1px solid #028090;
    border-radius: 4px;
    margin-bottom: 20px;
    &::placeholder {
      color: #028090;
      padding-left: 10px;
      text-transform: capitalize;
      font-size: 14px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Button = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  & input {
    width: 100%;
    max-width: 330px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #028090;
  }
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
