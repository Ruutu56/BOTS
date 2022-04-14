import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <span style={{color:"whitesmoke",fontWeight:"bolder",textShadow:"5px 8px black"}}>BOTS</span>
           {/* <i className="fab fa-typo3" /> 
            <i class="fas fa-dragon"></i> 
            
            <i class="fa-solid fa-mask-snorkel"></i>
            <i class="fa-brands fa-d-and-d"></i>
            <i class="fa-regular fa-helmet-battle"></i>*/}
            <i class="fas fa-user-astronaut" style={{color: "springgreen",fontSize:"48px",paddingLeft:"20px",fontWeight:"bolder",textShadow:"5px 7px black"}}></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          
           <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                style={{ textDecoration: "none", color: "whitesmoke",position:"right" }}
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
