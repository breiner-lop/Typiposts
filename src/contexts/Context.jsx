import { createContext, useState, useContext } from "react";

const Context = createContext("");
export const useCtx = () => useContext(Context);
export const Provider = ({ children }) => {
  
  //here is the useState that handles the create or update a post popup
  const [createOrUpdatePopup, setCreateOrUpdatePopup] = useState({state:false,id:""});

  //here is the useState that handles notification popup
  const [notificacionPopup, setNotificationPopup] = useState({state:false,text:""});

  //here is the useState that handles confirm popup
  const [confirmPopup, setConfirmPopup] = useState({state:false,id:""});

  return (
    //@ts-ignore
    <Context.Provider value={{createOrUpdatePopup,setCreateOrUpdatePopup,notificacionPopup,setNotificationPopup,confirmPopup,setConfirmPopup}}>
      {children}
    </Context.Provider>
  );
};