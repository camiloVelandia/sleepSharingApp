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
  @media (max-width: 767px) {
    display: none;
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
  width: 160;
  height: 40px;
  margin-right: 20px;
`;
export const MenuResponsive = styled.div`
  font-size: 30px;
  position: absolute;
  right: 0;
  & a {
    color: white;
    padding: 0 20px;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
export const A = styled.a`
  background-color: var(--light4-color);
  color: var(--brand-color);
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
`;
