import styled from 'styled-components';

const DBStyle = {}

DBStyle.UserInfo = styled.div `
  float: left;
  font-family: Helvetica;
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: 50px;
  margin-top: 80px;
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
  background: #FFA500;
  color: black;
  padding: 20px;
  width: auto;
  height: auto;
  :hover {
    letter-spacing: 2px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
  }
`

DBStyle.ParkMenu = styled.div`
font-family: Helvetica;
font-weight: 500;
padding-top: 20px;
padding-bottom: 20px;
float: right;
margin-right: 120px;

`

DBStyle.FriendInfo = styled.div`
float: right;
`
DBStyle.FriendBubble = styled.div`
font-family: Helvetica;
font-weight: 500;
letter-spacing: 1px;
margin-left: 50px;
margin-top: 20px;
text-decoration: none;
text-align: center;
border-radius: 25px;
background: #FFA500;
color: black;
padding: 20px;
width: auto;
height: auto;
:hover {
  letter-spacing: 2px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
}
`

export default DBStyle;