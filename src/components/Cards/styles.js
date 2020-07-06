import styled from 'styled-components';
import  cardsimg from '../../../static/Rectangle_13.jpg'

export const Card = styled.div`
  min-height:300px;
  border-radius: 0 0 8px 8px ;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`


export const Bgimg = styled.div`
  border-radius:8px 8px 0 0;
  background-image:url(${cardsimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  display:flex;
  align-items:flex-end;
  height:300px;
  width:400px;
`


export const Imgprofile = styled.img`
  border-radius:50%;
  height:50px;
  width:50px;
  margin:10px;
`

export const Detailscards = styled.div`
  height:211px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  color:#456990;
  background-color:#F8F8F8;
  padding:0 10px;
  border-radius: 0 0 8px 8px;
  & p{
    margin: 0;
  }
`


export const Services = styled.div`
  display:flex;
  justify-content:space-between;
  & figure{
    margin:0;
    & i{
      margin-left:10px;
    }
  }
`

export const Heart = styled.i`
  font-size:37px;
  margin:0 10px 20px 0;
`