import styled from 'styled-components';

export const BottomNavbar = styled.footer`
  min-height: 200px;
  width: 100%;
  background-color: #114b5f;
  color: #dadada;
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
  padding: 20px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 5px 20px;
  }
`;
export const P = styled.p`
  width: 80%;
  text-align: left;
  margin-top: 60px;
  @media (max-width: 767px) {
    margin-top: 0;
  }
`;
export const P2 = styled.p`
  text-align: left;
  @media (min-width: 1366px) {
    text-align: center;
  }
`;
export const Heading = styled.h2`
  text-align: left;
  @media (min-width: 1366px) {
    text-align: center;
  }
`;
