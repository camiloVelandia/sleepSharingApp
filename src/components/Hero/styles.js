import styled from 'styled-components';

const  heroImage = 'https://images.unsplash.com/photo-1572891086295-6c1c7c476549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80';

export const HeroSearch = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(0.5);
  }
  & h1 {
    color: var(--bg-color);
    text-align: center;
    position: relative;
  }
  & h2 {
    color: var(--bg-color);
    text-align: center;
    font-size: 42px;
    position: relative;
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
  width: 481px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & input {
    border: none;
    height: 30px;
    width: 430px;
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
  position: relative;
  & a {
    display: flex;
    align-items: center;
    border: var(--accet1-color) solid 1px;
    height: 41px;
    width: 330px;
    justify-content: center;
    background-color: white;
    color: var(--accet1-color);
    text-decoration: none;
    border-radius: 8px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    & a {
      margin-bottom: 10px;
    }
  }
`;
