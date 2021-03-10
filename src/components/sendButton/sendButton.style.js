import styled from 'styled-components';

const Button = styled.button`
color : blue;
margin: 30px 30px 30px 50px;
font-size: 30px;
padding: 10px;
height: 100px;
width: 100px;
box-sizing: border-box;
background-color: #e57373;
// color: white;
border-radius: 15px;
outline: 0;
box-shadow: 0px 2px 2px lightgray;
cursor: pointer;
transition: ease background-color 250ms;
font-weight: bold;
&:hover{
    transform: translateY(-3px);
    background-color: #f44336;
};
position:relative;
right: 200px;
`

const Styled = {
    Button
}
export default Styled;