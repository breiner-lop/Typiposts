import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useCtx } from "../contexts/Context";
import { MainDivCardPost,HeaderCardDiv,Comments,DescriptionPostCard,CardPostSubtitle,Title } from "../StyledComponents/PostCardStyled";
import TablePostComments from "./TablePostComments";
import {Link} from "react-router-dom"

export default function PostCardWithComments({ post,commentsData }) {
  //here are called the context data what handle create or update popup and confirm popup
  const { setCreateOrUpdatePopup, setConfirmPopup } = useCtx();
  //here is the open create or updated post popup Function
  const handleEditPostById = (id) => {
    setCreateOrUpdatePopup({ state: true, id });
  };
  //handle delete button
  const handleDeletePostBtn = (id) => {
    setConfirmPopup({ state: true, id });
  };
  return (
   
    <MainDivCardPost>
     <HeaderCardDiv>
     <Link to={`/${post.id}`}><Title>{post.title}</Title> </Link>
      <div align="center" sx={{ display: "flex" }}>
        <IconButton onClick={() => handleEditPostById(post.id)} aria-label="edit">
          <EditIcon sx={{ color: "#05132D" }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDeletePostBtn(post.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </div>
     </HeaderCardDiv>
     <DescriptionPostCard>
     <CardPostSubtitle>Description</CardPostSubtitle>
     <p> {post.body} </p>
     </DescriptionPostCard>
     <Comments>
    <CardPostSubtitle>Comments</CardPostSubtitle>
    <TablePostComments data={commentsData} />
        </Comments> 
    </MainDivCardPost>
   
  );
}
