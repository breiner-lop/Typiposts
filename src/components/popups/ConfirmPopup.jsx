import React from "react";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useCtx } from "../../contexts/Context";
import { Box, Button } from "@mui/material";
import { apiUrl } from "../../utils/apiUrl";
import axios from "axios";
export default function ConfirmPopup() {
  //here are called the context confirm popup
  const { setConfirmPopup, confirmPopup, setNotificationPopup } = useCtx();

  //here is the function to closing the popup
  const onClosePopup = () => {
    setConfirmPopup({ state: false, text: "" });
  };
  // custom de modal css
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingTop: theme.spacing(4),
    },
  }));
  //handle delete post from data base
  const handleDeletePost = (option) => {
    option
      ? // in case confirm delete
        axios
          .delete(`${apiUrl}/posts/${confirmPopup.id}`)
          .then((res) => {
            console.log(res);
            setConfirmPopup({ state: false, id: "" });
            setNotificationPopup({
              state: true,
              text: "Post deleted successfully",
            });
          })
          .catch((err) => {
            console.log(err);
            setNotificationPopup({ state: true, text: "Error deleting post" });
          })
      : // in case cancel delete
        setConfirmPopup({ state: false, id: "" });
  };
  return (
    <BootstrapDialog open={confirmPopup.state} onClose={onClosePopup}>
      <DialogContent>
        {`Are you sure you want to delete post ${confirmPopup.id}?`}
      </DialogContent>
      <Box variant="div" sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => handleDeletePost(false)}
          sx={{ minWidth: "100px", marginX: "5px", marginY: "20px" }}
          variant="contained"
          color="error"
        >
          No
        </Button>
        <Button
          onClick={() => handleDeletePost(true)}
          sx={{ minWidth: "100px", marginX: "5px", marginY: "20px" }}
          variant="contained"
          color="warning"
        >
          Yes
        </Button>
      </Box>
    </BootstrapDialog>
  );
}
