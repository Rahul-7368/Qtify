import React from "react";
import logo from "../../assests/logo.png";
import styles from "./Logo.module.css";
// import { useNavigate } from "react-router-dom";





  const Logo = () => {
  return(
    <div class="img-container">
    <img src={logo} width={67} alt="logo not available" />
  
    </div>
  )

  // return <img src={logo} width={67} alt="logo not available" />;
}

export default Logo;

