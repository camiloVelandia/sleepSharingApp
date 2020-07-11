import styled from 'styled-components';

export const Form = styled.form`
  background-color: var(--light2-color);
  margin: 0;
`;
export const H1 = styled.h1`
  text-align: center;
  padding: 30px 0;
  font-weight: 700;
  font-size: 48px;
  color: var(--dark2-color);
  margin: 0;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 966px;
  & span {
    color: red;
  }
`;
export const SubHeading = styled.p`
  font-weight: 30px;
  color: var(--dark2-color);
  padding-left: 10px;
  border-bottom: 1px solid var(--light4-color);
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & span {
    color: red;
  }
  & input,
  select {
    background-color: var(--bg-color);
    display: block;
    width: 40%;
    max-width: 360px;
    height: 50px;
    border: 1px solid var(--accet1-color);
    border-radius: 4px;
    margin: 0 40px;
    margin-bottom: 20px;
    outline: none;
    color: var(--accet1-color);
    &::placeholder {
      padding-left: 10px;
      color: var(--accet1-color);
    }
    @media (min-width: 700px) and (max-width: 980px) {
      width: 30%;
    }
    @media (max-width: 699px) {
      width: 100%;
    }
  }
  & select > option {
    color: var(--accet1-color);
    max-width: 360px;
  }
`;
export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & label {
    display: block;
    width: 85%;
    padding: 20px;
    color: var(--dark2-color);
    font-size: 18px;
  }
  & span {
    color: red;
  }
  & textarea {
    margin: 20px 0;
    background-color: var(--light2-color);
    display: block;
    width: 100%;
    border: 2px solid var(--accet1-variant-color);
    border-radius: 4px;
    &::placeholder {
      color: var(--accet1-variant-color);
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
export const Label = styled.p`
  color: var(--dark2-color);
  font-size: 18px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--light4-color);
`;
export const File = styled.div`
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
`;
export const Container2 = styled.div`
  max-width: 1100px;
  color: var(--dark2-color);
  font-size: 18px;
  margin: 0 auto;
  & span {
    color: red;
  }
`;
export const ChecboxContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const TextArea2 = styled.div`
  & textarea {
    display: flex;
    margin: 0 auto;
    width: 80%;
    background-color: var(--light2-color);
    display: block;
    border: 2px solid var(--accet1-variant-color);
    border-radius: 4px;
    &::placeholder {
      color: var(--accet1-variant-color);
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
export const Checkbox = styled.div`
  display: flex;
  & label {
    position: relative;
    display: flex;

    padding-right: 10px;
    font-size: 30px;
    & span {
      padding-left: 5px;
      position: absolute;
      top: 100%;
      font-size: 12px;
      margin: 0 auto;
    }
  }
  & input {
    display: flex;
  }
  @media (max-width: 767px) {
    width: 30%;
    margin: 20px 0;
  }
`;

export const Submit = styled.div`
  text-align: center;
  padding: 40px 0;
  & input {
    width: 100%;
    max-width: 330px;
    height: 40px;
    background-color: var(--accet1-color);
    color: var(--light2-color);
    font-size: 18px;
    border: none;
    border-radius: 4px;
  }
  & input[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;
