import styled from 'styled-components';
import heroImage from '../../../static/hero_image.png';

export const HeroSearch = styled.div`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  & h1 {
    text-shadow: 2px 2px #777777;
    color: #f8f8f8;
    text-align: center;
  }
  & h2 {
    text-shadow: 2px 2px #777777;
    color: #f8f8f8;
    text-align: center;
    font-size: 42px;
  }
  @media (max-width: 767px) {
    height: 100vh;
    & h1,
    h2 {
      font-size: 26px;
    }
  }
`;

export const Search = styled.div`
  border-radius: 20px;
  height: 39px;
  width: 100%;
  max-width: 481px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    border: none;
    height: 30px;
    width: 100%;
    max-width: 430px;
  }
  & input:focus {
    outline: none;
    outline-width: 0;
  }
  @media (max-width: 767px) {
    width: 90%;
    & input {
      width: 90%;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-around;
  & a {
    display: flex;
    align-items: center;
    border: #028090 solid 1px;
    height: 41px;
    width: 330px;
    justify-content: center;
    background-color: #f8f8f8;
    color: #028090;
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 60px;
  }
  & a.host__button {
    color: #f8f8f8;
    background-color: #028090;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    & a {
      margin-bottom: 10px;
    }
  }
`;
