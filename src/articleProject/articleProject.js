import {useState} from 'react';
import PostArticle from '../screens/postArticle/postArticle';
import CreateArticle from '../screens/createArticle/createArticle';


const ArticleProject = function(){

    let [swich, setSwich] = useState(true);
    const toSecondPage = ()=>{
        setSwich(swich = false)
    }
    const toFirstPage = ()=>{
        setSwich( swich = true)
    }

    if(swich){
        return(<PostArticle toSecondPage = { toSecondPage }/>)
    }else{
        return(<CreateArticle toFirstPage = { toFirstPage }/>)
    }
}
export default ArticleProject;