import CreateArticleButton from '../../components/CreateArticleButton/CreateArticleButton';
import Styled from './postArticle.style';
import React ,{useEffect,useState} from 'react';
 

const PostArticle = function({toSecondPage}){
    const [articles,setArticle] = useState([])
    
    const getArticles = ()=>{
        return fetch('http://localhost:3005/', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
 })
.then(response => response.json()) 
.then(json =>{return json})
.catch(err => console.log(err));
    }
    useEffect(()=>{
        if(!articles?.length){

        getArticles().then(res=>{
            setArticle(res)
        })
    }

    },[articles.length])
    return(
        <Styled.Div>
            <CreateArticleButton toSecondPage = { toSecondPage } />
            <p>array</p>
        </Styled.Div>
    )
}
export default PostArticle;