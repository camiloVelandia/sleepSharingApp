import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 551px;
  padding-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
`;
export const Heading = styled.div`
  text-align: center;
  position: relative;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid #dadada;
  display: flex;
  & h2 {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #dadada;
  }
`;
export const Inputs = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dadada;
  width: 95%;
  margin: 0 auto;
  & input {
    width: 92%;
    height: 50px;
    border: 1px solid #028090;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: transparent;
    &::placeholder {
      padding: 10px;
      color: #028090;
      font-size: 13px;
    }
  }
`;
export const Submit = styled.input`
  width: 85%;
  margin: 20px auto;
  border: none;
  color: #f8f8f8;
  background-color: #028090;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;
export const H3 = styled.h3`
  font-size: 14px;
`;
export const Anchor = styled.a`
  font-size: 14px;
  color: #444;
  text-decoration: none;
  display: block;
  margin: 10px 0;
`;
