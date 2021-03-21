import styled from 'styled-components';

const View = styled.div`
background: #093028;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #237A57, #093028);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #237A57, #093028); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: grid;
grid-template-columns: auto;
justify-content: center;
align-content: center;
width: 100vw;
height: 100vh;
`;

export default View;
