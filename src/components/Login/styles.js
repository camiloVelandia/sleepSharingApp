import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 551px;
  padding-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: var(--bg-color);
  /*box shadow? variable*/
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
`;
export const Heading = styled.div`
  text-align: center;
  position: relative;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid var(--light4-color);
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
    color: var(--light4-color);
  }
`;
export const Inputs = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--light4-color);
  width: 95%;
  margin: 0 auto;
  & input {
    width: 92%;
    height: 50px;
    border: 1px solid var(--accet1-color);
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: transparent;
    &::placeholder {
      padding: 10px;
      color: var(--accet1-color);
      font-size: 13px;
    }
  }
`;
export const Submit = styled.input`
  width: 85%;
  margin: 20px auto;
  border: none;
  color: var(--bg-color);
  background-color: var(--accet1-color);
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;
export const H3 = styled.h3`
  font-size: 14px;
`;
export const Anchor = styled.a`
  font-size: 14px;
  color: var(--dark1-color);
  text-decoration: none;
  display: block;
  margin: 10px 0;
`;
