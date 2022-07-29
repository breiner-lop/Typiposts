import { MainDivApp, SecondDivApp } from "../StyledComponents/AppStyled";
import PostCard from "../components/PostCard";
import React from "react";
import axios from "axios"
import { apiUrl } from "../utils/apiUrl";

function Posts() {
  // useStates
  const [posts, setPosts] = React.useState([]); //array of posts
  //get all posts from typicode api
const getAllPosts=()=>{
  axios.get(`${apiUrl}/posts`)
  .then((res)=>{
      console.log(res)
      setPosts(res.data)
  })
  .catch((err)=>{
      console.log(err)
  })
}
  // what happen when component is mounted or page loaded
React.useEffect(()=>{
  getAllPosts()
},[])
  return (
    <MainDivApp>
      <SecondDivApp>
        {posts.map((post,idx)=>{
          return (<PostCard key={idx} data={post} />)
        })
         }
      </SecondDivApp>
    </MainDivApp>
  );
}

export default Posts;
