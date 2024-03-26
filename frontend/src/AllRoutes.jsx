import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestions";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import About from "./pages/About/About";
import Homepage from "./pages/Chat/Homepage/Homepage";
import Chat from "./pages/Chat/chats/Chat";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Auth" element={<Auth />} />
      <Route exact path="/Questions" element={<Questions />} />
      <Route exact path="/AskQuestion" element={<AskQuestion />} />
      <Route exact path="/Questions/:id" element={<DisplayQuestion />} />
      <Route exact path="/Tags" element={<Tags />} />
      <Route exact path="/Users/:id" element={<UserProfile />} />
      <Route exact path="/Users" element={<Users />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Teams" Component={Homepage}/>
      <Route exact path="/Teams/Chats" Component={Chat} />
    </Routes>
  );
};

export default AllRoutes;
