import Styled from './sendButton.style';

const SendButton = function({addArticle}){
    return(
        <Styled.Button className='sendButton' onClick={addArticle}>שלח</Styled.Button>
    )
}
export default SendButton;