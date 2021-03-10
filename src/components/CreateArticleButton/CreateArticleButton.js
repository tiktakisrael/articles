import Styled from './createArticleButton.style'

const CreateArticleButton = function(props){
    return(
        <Styled.Button className= 'toSecondPage' onClick= { props.toSecondPage}>צור פוסט</Styled.Button>        
    )}
export default CreateArticleButton;