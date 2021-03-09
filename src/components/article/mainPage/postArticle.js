import styled from 'styled-components';
import CreateArticleButton from './CreateArticleButton';

const Div = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: right;
`

const PostArticle = function({toSecondPage}){

    return(
        <Div>
            <CreateArticleButton toSecondPage = { toSecondPage } />
            <p>array</p>
        </Div>
    )
}
export default PostArticle;