import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import SignUp from "./pages/SignUp";
import Subscription from "./pages/Subscription";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Songs from "./pages/Songs";
import Auth from "./pages/Auth";
import WelcomeScreen from "./pages/WelcomeScreen";
import Header from "./components/Header";
import Playlist from "./pages/Playlist"


const App = () => {
  return (
    <>
   
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signUp" element={<SignUp />} />
         <Route path="/home" element={<Home />} />
         <Route path="/dashboard" element={<DashBoard />} />
         <Route path="/search" element={<SearchPage />} />
          <Route path="/subscription" element={<Subscription />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/genres" element={<Genre />} />
              <Route path="/song" element={<Songs />} />
      </Routes>


    </Router>
   
    </>
  );
};

export default App;

