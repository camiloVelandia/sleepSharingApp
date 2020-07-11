import styled from 'styled-components';
import heroImage from '../../../static/hero_image.png';

export const Figure = styled.figure`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 500px;
  margin: 0;
  @media (max-width: 767px) {
    height: 300px;
  }
`;
