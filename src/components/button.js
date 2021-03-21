import styled from 'styled-components';

const Button = styled.button`

margin-top: 15px;
margin-left: 15px;
border: none;
background-color: rgb(35, 122, 87);
border-radius: 8px;
width: 120px;
height: 40px;
font-family: 'Roboto', sans-serif;;
font-size: 14px;
font-weight: 300;
color: white;
cursor: pointer;
&:focus {
    outline: none;
    box-shadow: none;
}
&:hover {
    transition-duration: 1s;
    background-color: rgb(9, 48, 40);
}
`;

export default Button;