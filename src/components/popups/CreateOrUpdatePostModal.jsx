import {useEffect} from "react"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Form } from "../../StyledComponents/AppStyled";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCtx } from "../../contexts/Context";
import axios from "axios"
import { apiUrl } from "../../utils/apiUrl";

export default function CreateOrUpdatePost() {

  //here are called the context data what handle create or update popup and notification popup
  const {createOrUpdatePopup,setCreateOrUpdatePopup,setNotificationPopup}=useCtx()

  // here are called the useForm Varibles
  const {register,handleSubmit,reset } = useForm();

  //here is the function to create a new post
  const createNewPost = (data) => {
    axios.post(`${apiUrl}/posts`,{
      title:data.title,
      body:data.body,
      userId:1
    })
    .then((res)=>{
      console.log(res)
      setCreateOrUpdatePopup({state:!createOrUpdatePopup.state,id:""});// this close the create or update post popup when is succesfully created or updated
      setNotificationPopup({state:true,text:"Post created successfully"})// this open de notifiacion popup succefully
    })
    .catch((err)=>{
      console.log(err)
      setNotificationPopup({state:true,text:"Error creating post "})// this open de notifiacion popup with error
    })
  };
    //here is the function to update a post
    const updatePost = (data) => {
      axios.put(`${apiUrl}/posts/${createOrUpdatePopup.id}`,{
        id:createOrUpdatePopup.id,
        title:data.title,
        body:data.body,
        userId:1
      })
      .then((res)=>{
        console.log(res)
        setCreateOrUpdatePopup({state:!createOrUpdatePopup.state,id:""});// this close the create or update post popup when is succesfully created or updated
        setNotificationPopup({state:true,text:"Post updated successfully"})// this open de notifiacion popup succefully
      })
      .catch((err)=>{
        console.log(err)
        setNotificationPopup({state:true,text:"Error updating post "})// this open de notifiacion popup with error
      })
    };
// handle button submit function
const handleOnSubmitBtn=(dataForm)=>{
  createOrUpdatePopup.id
  ?
  updatePost(dataForm) // if is update new post
  :
  createNewPost(dataForm) // if is create new post

}
  //here is the function to closing the popup
  const onClosePopup = () => {
    setCreateOrUpdatePopup({...createOrUpdatePopup, state:!createOrUpdatePopup.state});//this close the create or update post popup
  };

  // what happen when then component is mounted
  useEffect(()=>{
    createOrUpdatePopup.id
    ?
    axios.get(`${apiUrl}/posts/${createOrUpdatePopup.id}`)
    .then((res)=>{
      console.log(res)
      reset(res.data) // here reset data with the value from api response
    })
    .catch((err)=>{
      console.log(err)
    })
    :
    reset({title:"",comment:""}) // here reset data with default values (case be created post and don't be update post)
    
  },[createOrUpdatePopup])

  return (
    <Dialog open={createOrUpdatePopup.state} onClose={onClosePopup} reset >
      <DialogTitle align="center">{createOrUpdatePopup.id?"Update Post":"Create New Post"}</DialogTitle>
      <Form onSubmit={handleSubmit(handleOnSubmitBtn)}>
        <TextField
          {...register("title")}
          sx={{ marginBottom: "10px" }}
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
          required
        />
        <TextField
          {...register("body")}
          multiline
          rows={4}
          fullWidth
          id="outlined-basic"
          label="Comment"
          variant="outlined"
          required
        />
        <Button
          type="submit"
          fullWidth
          sx={{ marginTop: "15px" }}
          variant="contained"
          color="warning"
        >
         {createOrUpdatePopup.id?"Save":"Public"} 
        </Button>
      </Form>
    </Dialog>
  );
}
