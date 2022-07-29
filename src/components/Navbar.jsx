import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import {
  LogoPosts,
  NavBarDivMain,
  AddNewPost,
} from "../StyledComponents/AppStyled";
import { useCtx } from "../contexts/Context";
import { Link } from "react-router-dom";


export default function Navbar() {
    //here are called the context data what handle create or update popup
    const {setCreateOrUpdatePopup}=useCtx()

    //here is the open create or updated post popup Function
    const handleCreateNewPost=()=>{
      setCreateOrUpdatePopup({state:true,id:""})
    }
  return (
    
    <NavBarDivMain>
      <LogoPosts><Link to="/"><img src="/imgs/typilogo.png"/></Link></LogoPosts>
      <AddNewPost>
        <Button
        onClick={()=>handleCreateNewPost()}
          variant="contained"
          color="warning"
        >
          Add new post
        </Button>
      </AddNewPost>
    </NavBarDivMain>
  );
}
