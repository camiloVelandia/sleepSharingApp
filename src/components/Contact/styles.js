import styled from 'styled-components';

export const Section = styled.section`
  min-height: 200px;

  background-color: #f45b69;
  display: flex;
  padding: 0 15px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #456990;
  text-align: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  & figure {
    margin: 15px 20px;
    font-size: 40px;
  }
`;
export const P = styled.p`
  margin: 0;
`;
