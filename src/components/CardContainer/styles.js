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
  grid-template-columns:repeat(3,1fr);
  display: grid;
  gap:20px;
  width: 80%;
  max-width: 1166px;
  margin: 20px auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & section {
    padding-bottom: 30px;
  }
`;
