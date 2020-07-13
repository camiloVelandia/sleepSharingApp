import styled from 'styled-components';

export const TopNavbar = styled.header`
  height: 60px;
  background-color: var(--brand-color);
  display: flex;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
  & button.login {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  & li {
    list-style: none;
    color: var(--bg-color);
    margin-right: 20px;
  }
`;

export const Img = styled.img`
  width: 120;
  height: 40px;
  margin-left: 20px;
  width: 160;
  @media (min-width: 767px) {
    width: unset;
  }
`;
export const MenuResponsive = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 16px;
  height: 60px;
  width: 160px;
  align-items: center;
  justify-content: space-around;

  & Ul {
    display: none;
    position: absolute;
    flex-direction: column;
    list-style: none;
    margin: 57px 0px 0px 0px;
    padding: 0px;
    width: 200px;
    z-index: 1;
    text-decoration: none;
  }
  & i {
    color: white;
  }

  &:hover > Ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 767px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: var(--light4-color);
  color: var(--brand-color);
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
`;
