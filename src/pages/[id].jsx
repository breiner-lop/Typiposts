import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCardWithComments from "../components/PostCardWithComments";
import { SecondDivApp } from "../StyledComponents/AppStyled";
import { apiUrl } from "../utils/apiUrl";

export default function Page() {
  //useStates
  const [comments, setComments] = useState([]);
  const [postData, setPostData] = useState({});
  // getting id from url
  const params = useParams();
  // here get the post comments from de api by postId
  const getPostCommentsById = () => {
    axios
      .get(`${apiUrl}/posts/${params.id}/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // here get the post data from de api by postId
  const getPostById = () => {
    axios
      .get(`${apiUrl}/posts/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPostById();
    getPostCommentsById();
  }, [params.id]);
  return (
    <SecondDivApp>
      <PostCardWithComments post={postData} commentsData={comments} />
    </SecondDivApp>
  );
}
