import styled from 'styled-components';

export const Section = styled.div`
  background-color: var(--bg-color);
  & h2 {
    text-align: center;
    font-size: 30px;
    color: var(--dark2-color);
  }
`;
export const Container = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 20px;
  width: 80%;
  max-width: 1166px;
  margin: 20px auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & section {
    padding-bottom: 30px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
