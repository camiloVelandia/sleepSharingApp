import styled from 'styled-components';

export const BottomNavbar = styled.footer`
  min-height: 200px;
  width: 100%;
  background-color:var(--brand-color);
  color: var(--light4-color);
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  @media (max-width: 767px) {
    padding-top: 15px;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    overflow: hidden;
  }
`;
export const Article = styled.article`
  width: 30%;
  height: 100%;
  & img {
    text-align: left;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 5px 0px;
  }
`;
export const P = styled.p`
  width: 80%;
  text-align: left;
  margin-top: -10px;
  @media (max-width: 767px) {
    margin-top: 0;
    width: 100%;
  }
`;
export const P2 = styled.p`
  text-align: left;
  padding-top: 20px;
  @media (min-width: 1366px) {
    text-align: center;
  }
`;
export const Heading = styled.h2`
  text-align: left;
  & figure {
    text-align: center;
  }
  @media (min-width: 1366px) {
    text-align: center;
  }
`;
export const Figure = styled.h2`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
