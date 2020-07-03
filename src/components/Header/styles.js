import styled from 'styled-components';

export const TopNavbar =styled.header`
  height:60px;
  background-color:#114B5F;
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
    color:#DADADA;
    margin-right:20px;
  }
`

export const A =styled.a`
  background-color:#F8F8F8;
  color:#114B5F;
  border-radius:4px;
  padding:10px;
  text-decoration:none;
`
export const Img=styled.img `
  width:160;
  height:40px;
  margin-right:20px;
`