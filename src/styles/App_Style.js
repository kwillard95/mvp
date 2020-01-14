import styled from 'styled-components';

const AppStyle = {}

AppStyle.Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: Sans-serif;
`

AppStyle.Logo = styled.div`
font-family: Helvetica;
font-weight: 500;
font-size: 18px;
color: #757575;
text-align: center;
top: 40px

`

AppStyle.Map = styled.div`
  height: 500px;
  width: 100%
`

AppStyle.Button = styled.button`
color: black !important;
text-transform: uppercase;
text-decoration: none;
background: #FFA500;
padding: 20px;
margin: 10px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
:hover {
  background: #434343;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
}
`

AppStyle.Input = styled.input`
    -webkit-appearance: none;
    width: 100%;
    left: 10px;
    text-align: center;
    border: 0;
    padding: 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all .15s ease;
   `



export default AppStyle;