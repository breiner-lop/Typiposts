import React from 'react'
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Dialog from "@mui/material/Dialog";
import { useCtx } from '../../contexts/Context'
import { Button } from '@mui/material';

export default function NotificationPopup() {
    //here are called the context notification popup
    const {notificacionPopup,setNotificationPopup}=useCtx()

    //here is the function to closing the popup
    const onClosePopup = () => {
        setNotificationPopup({state:false,text:""});
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        paddingLeft:  theme.spacing(10),
        paddingRight:  theme.spacing(10),
        paddingTop:  theme.spacing(4)
      }
  }));
  return (
    <BootstrapDialog open={notificacionPopup.state} onClose={onClosePopup}>
       <DialogContent>
       {notificacionPopup.text}
       </DialogContent>
       <Button onClick={()=>onClosePopup()} sx={{minWidth:"100px",marginX:"auto",marginY:"20px"}} variant="contained" color='warning'>Ok</Button> 
    </BootstrapDialog>
  )
}
