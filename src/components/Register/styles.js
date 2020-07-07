import styled from 'styled-components';

export const Section = styled.section`
  background-color: f8f8f8;
  max-width: 1366px;
  color: var(--dark1-color);
  margin: 0 auto;
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
export const H1 = styled.h1`
  color: var(--dark2-color);
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
    border: 1px solid var(--light4-color);
    height: 18px;
    width: 18px;
    color: var(--dark1-color);
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
    border: 1px solid var(--accet1-color);
    border-radius: 4px;
    margin-bottom: 20px;
    &::placeholder {
      color: var(--accet1-color);
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
    color: var(--light2-color);
    background-color: var(--accet1-color);
  }
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
export const Photo = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  & label {
    cursor: pointer;
    border: 1px solid var(--dark2-color);
    padding: 10px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    & label {
      width: 15%;
    }
  }
  /* @media (max-width: 767px) {
    display: block;
  } */
`;

export const PhotoContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  & > input {
    border: 1px solid #028090;
    background-color: transparent;
    color: #028090;
    width: 180px;
    height: 40px;
    border-radius: 4px;
  }
  /* @media (max-width: 767px) {
    display: block;
  } */
`;
