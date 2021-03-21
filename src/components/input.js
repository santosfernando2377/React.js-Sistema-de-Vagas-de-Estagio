import styled from 'styled-components';

const Input = styled.input`

margin-left: 15px;
margin-top: 10px;
height: 23px;
width: 95%;
border-top: none;
border-left: none;
border-right: none;
font-family: 'Roboto', sans-serif;;
font-size: 14px;
font-weight: 500;
color: black;
&:focus {
    outline: none;
    box-shadow: none;
}
`;

export default Input;