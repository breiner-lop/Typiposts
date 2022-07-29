import React from "react";
import Navbar from "./Navbar";
import ConfirmPopup from "./popups/ConfirmPopup";
import CreateOrUpdatePost from "./popups/CreateOrUpdatePostModal";
import NotificationPopup from "./popups/NotificationPopup";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/** modals */}
      <CreateOrUpdatePost />
      <NotificationPopup />
      <ConfirmPopup />
    </>
  );
}
