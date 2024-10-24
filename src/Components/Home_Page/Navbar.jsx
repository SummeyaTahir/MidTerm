// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [activeItem, setActiveItem] = useState("Stays");
  
  const handleItemClick = (item, event) => {
    event.preventDefault();
   
    setActiveItem(item);
  };

  return (
    <>
      <nav>
        <div>
          <div id="logoname">
          
       <FontAwesomeIcon id="movie_logo" icon={faFilm} />
            <span id="name">Movie Explorer</span>
          </div>
        </div>
        <ul id="navigation1">
          <li className={`nav_li ${activeItem ==="Home" ? "active" : ""}`}>
            <a
              href="Home.html"
              onClick={(event) => handleItemClick("Home", event)}
            >
              Home
            </a>
          </li>
          <li
            className={`nav_li ${activeItem === "About" ? "active" : ""}`}
          >
            <a
              href="projects.html"
              onClick={(event) => handleItemClick("About", event)}
            >
              About
            </a>
          </li>
          <li className={`nav_li ${activeItem ==="Favourities" ? "active" : ""}`}>
            <a
              href="about.html"
              onClick={(event) => handleItemClick("Favourities", event)}
            >
              Favourities
            </a>
          </li>
        </ul>
        <ul id="right_nav_items">
        <li className="nav_li_right" >
           <input id="search" value="Search Here"/>
          </li>
          
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
