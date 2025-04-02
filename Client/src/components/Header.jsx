import React from "react";
import beatifyLogo from "../assets/images/Beatify.png"
import profile from "../assets/images/profile.jpg"
import Input from "./Input";
import { Link } from "react-router-dom";
import Button from "./Button";
import SearchBar from "./SerchBar";
import { useNavigate } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Navbar from "./Navbar";

const Header = () => {
   const navigate = useNavigate();
  return (
    <>
    <nav  className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand"><img src={beatifyLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/><span>Beatify</span></a>
        <form className=" sticky-lg-top" role="search"><SearchBar/></form>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="button"onClick={()=>navigate("/sigUp")} >signUp</button>
               <button class="btn btn-primary" type="button" onClick={()=>navigate("/login")}>Login</button>
               <img src={profile} alt="Logo" width="40" height="34" className="d-inline-block align-text-top"/>
        </div>
        </div>
        </nav>
        
    </>
    
   
   
   
      
  );
};

export default Header;
