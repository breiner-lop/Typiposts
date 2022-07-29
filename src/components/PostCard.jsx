import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useCtx } from "../contexts/Context";
import { MainDivCardPost,HeaderCardDiv,Comments,DescriptionPostCard,CardPostSubtitle,Title } from "../StyledComponents/PostCardStyled";
import {Link} from "react-router-dom"

export default function PostCard({ data }) {
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
     <Link to={`/${data.id}`}><Title>{data.title}</Title> </Link>
      <div align="center" sx={{ display: "flex" }}>
        <IconButton onClick={() => handleEditPostById(data.id)} aria-label="edit">
          <EditIcon sx={{ color: "#05132D" }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDeletePostBtn(data.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </div>
     </HeaderCardDiv>
     <DescriptionPostCard>
     <CardPostSubtitle>Description</CardPostSubtitle>
     <p> {data.body} </p>
     </DescriptionPostCard>
     <Button href={`/${data.id}`} color="warning">Visit Post</Button>
    </MainDivCardPost>
   
  );
}
