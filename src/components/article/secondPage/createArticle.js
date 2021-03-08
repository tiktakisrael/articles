import { useState } from "react";
import SendButton from "./sendButton";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
const CreateArticle = function(props){
    const addArticle = ()=>{
       const art = [
            titleInput,
            nameInput,
            textBodyInput
        ];
        console.log(art);
        props.toFirstPage();
    }

    let [titleInput, setTitleInput ] = useState('');
    let [nameInput, setNameInput ] = useState('');
    let [textBodyInput, setTextBodyInput ] = useState('');

    const handleTitleInput = event => {
        setTitleInput( event.target.value );
        console.log(titleInput);
      };
    const handleNameInput = event => {
      setNameInput( event.target.value );
      console.log(nameInput);
    };
    const handleTextBodyInput = event => {
      setTextBodyInput( event.target.value );
      console.log(textBodyInput);
    };
    return(
        <Div className= 'createArticle'>
            <span>כותרת</span>
            <Input className='title'  placeholder="Enter title" 
                onChange = {handleTitleInput}></Input>
            <span>שם הכותב</span>
            <Input className='nameArt'  placeholder="Enter name"
                onChange = {handleNameInput} ></Input>
            <span>תוכן המאמר</span>
            <InputBody className='textBody'  placeholder="Enter the Article" 
                onChange = {handleTextBodyInput}></InputBody>
            <SendButton addArticle={addArticle} />
        </Div>
    )
}
export default CreateArticle;