import styled from 'styled-components';

export const Section = styled.div`
  background-color: #f8f8f8;
  & h2 {
    text-align: center;
    font-size: 30px;
    color: #555;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 80%;
  max-width: 1166px;
  margin: 0 auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & section {
    padding-bottom: 30px;
  }
`;
