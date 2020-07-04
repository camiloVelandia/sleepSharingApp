import styled from 'styled-components';
import  cardsimg from '../../../static/Rectangle_13.jpg'

export const Bgimg = styled.div`
  background-image:url(${cardsimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  display:flex;
  align-items:flex-end;
  height:200px;
  width:300px;
`
export const Detailscards = styled.div`
  border:solid red 1px;
  height:200px;
  width:300px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  & p{
    margin: 0;
  }
`

export const Imgprofile =styled.img`
  border-radius:50%;
  height:50px;
  width:50px;
`