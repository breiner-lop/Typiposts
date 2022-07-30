import React from "react";
import Navbar from "./Navbar";
import ConfirmPopup from "./popups/ConfirmPopup";
import CreateOrUpdatePost from "./popups/CreateOrUpdatePostModal";
import NotificationPopup from "./popups/NotificationPopup";
import {Main} from "../StyledComponents/AppStyled"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      {/** modals */}
      <CreateOrUpdatePost />
      <NotificationPopup />
      <ConfirmPopup />
    </>
  );
}
