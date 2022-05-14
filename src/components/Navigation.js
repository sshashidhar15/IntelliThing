
import React from "react";
import './Navigation.css';
import logo from "../images/logo.png"

function Navigation()
{
return(

<header className = "nav">

    <img src= {logo} alt ="na" className="nav-logo"/>
     
        <div className="nav-items">
            <h4 className="serv-items">What we do</h4>
            <h4 className="serv-items"> Store </h4>
            <h4 className="serv-items"> Innovation</h4>
           <h4 className="serv-items">Contact</h4>
      </div>

      <button className="nav-button">Get Quote </button>   
       
</header>

    )
}

export default Navigation