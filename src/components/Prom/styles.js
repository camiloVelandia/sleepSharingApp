import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--light2-color);
  max-width: 1366px;
  margin: 0 auto;
  color: var(--accet3-color);
  padding: 20px 0;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const Article = styled.article`
  margin: 0;
  width: 25%;
  text-align: center;
  & figure > i {
    font-size: 50px;
  }
  & p {
    font-weight: 700;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;


export const Wrapper =styled.div`
  width:100%;
  background-color:var(--light2-color);
`