import styled from 'styled-components';

export const TopNavbar =styled.header`
  height:60px;
  background-color:var(--brand-color);
  display:flex;
  align-items:center;
`

export const Menu = styled.nav`
  display:flex;
  justify-content:space-between;
  width:100%;
`

export const Ul=styled.ul`
  display:flex;
  align-items:center;
  & li{
    list-style:none;
    color:var(--bg-color);
    margin-right:20px;
  }
`

export const A =styled.a`
  background-color:var(--light4-color);
  color:var(--brand-color);
  border-radius:4px;
  padding:10px;
  text-decoration:none;
`
export const Img=styled.img `
  width:160;
  height:40px;
  margin-right:20px;
`