import {useState} from 'react';
import PostArticle from './mainPage/postArticle';
import CreateArticle from './secondPage/createArticle';


const ArticleProject = function(props){

    let [swich, setSwich] = useState(true);
    const toSecondPage = ()=>{
        console.log(swich);
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