import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px 0px 0px;
`
const Input = styled.input.attrs({multiline:true})`
    width: 500px;
    height: 50px;
    text-align: center;
`
const InputBody = styled.input.attrs({multiline:true})`
    width: 500px;
    height: 200px;
    text-align: center;
`

const Styled ={
    Div,
    Input,
    InputBody
}
export default Styled;