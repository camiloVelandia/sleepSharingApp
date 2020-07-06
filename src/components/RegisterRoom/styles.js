import styled from 'styled-components';

export const Form = styled.form`
  background-color: #f2f2f2;
  margin: 0;
`;
export const H1 = styled.h1`
  text-align: center;
  padding: 30px 0;
  font-weight: 700;
  font-size: 48px;
  color: #555;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 966px;
`;
export const SubHeading = styled.p`
  font-weight: 30px;
  color: #555;
  padding-left: 10px;
  border-bottom: 1px solid #dadada;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & input,
  select {
    background-color: #f8f8f8;
    display: block;
    width: 40%;
    max-width: 360px;
    height: 50px;
    border: 1px solid #028090;
    border-radius: 4px;
    margin: 0 40px;
    margin-bottom: 20px;
    outline: none;
    color: #028090;
    &::placeholder {
      padding-left: 10px;
      color: #028090;
    }
    @media (min-width: 700px) and (max-width: 980px) {
      width: 30%;
    }
    @media (max-width: 699px) {
      width: 100%;
    }
  }
  & select > option {
    color: #028090;
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
    color: #555;
    font-size: 18px;
  }
  & textarea {
    margin: 20px 0;
    background-color: #f2f2f2;
    display: block;
    width: 100%;
    border: 2px solid #005f6b;
    border-radius: 4px;
    &::placeholder {
      color: #005f6b;
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
export const Label = styled.p`
  color: #555;
  font-size: 18px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dadada;
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
    border: 1px solid #555;
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
  color: #555;
  font-size: 18px;
  margin: 0 auto;
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
    background-color: #f2f2f2;
    display: block;
    border: 2px solid #005f6b;
    border-radius: 4px;
    &::placeholder {
      color: #005f6b;
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
    background-color: #028090;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 4px;
  }
`;
