import { useState } from "react";
import SendButton from "../../components/sendButton/sendButton";
import Styled from './createArticle.style'
const CreateArticle = function(props){
    const addArticle = ()=>{
       const art = [
            titleInput,
            nameInput,
            textBodyInput
        ];
        console.log(art);
        fetch('http://localhost:3005/', {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify({
                titleInput,
                nameInput,
                textBodyInput
            })
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));
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
        <Styled.Div className= 'createArticle'>
            <span>כותרת</span>
            <Styled.Input className='title'  placeholder="Enter title" 
                onChange = {handleTitleInput}></Styled.Input>
            <span>שם הכותב</span>
            <Styled.Input className='nameArt'  placeholder="Enter name"
                onChange = {handleNameInput} ></Styled.Input>
            <span>תוכן המאמר</span>
            <Styled.InputBody className='textBody'  placeholder="Enter the Article" 
                onChange = {handleTextBodyInput}></Styled.InputBody>
            <SendButton addArticle={addArticle} />
        </Styled.Div>
    )
}
export default CreateArticle;