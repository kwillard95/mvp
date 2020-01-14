import styled from 'styled-components';

const UserForm = {}

UserForm.Form = styled.form`
  text-align: center;
  margin:10px auto;
	max-width: 400px;
	padding: 20px 12px 10px 20px;
	font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`

UserForm.Input = styled.input`
  box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border:1px solid #BEBEBE;
	padding: 5px;
	margin:5px;
	outline: none;
`

export default UserForm;