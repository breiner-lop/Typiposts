
import React from "react";
import Posts from "./pages/Posts"
import Page from "./pages/[id]";
import { Routes, Route} from "react-router-dom";
function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Posts/>} />
       <Route path="/:id" element={<Page/>} />
     </Routes>
   </>
  );
}

export default App;
