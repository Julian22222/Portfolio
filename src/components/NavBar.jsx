import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpForm from "./PopUpForm";
// import { useRef } from "react";
import "../Styles/main.css";
import { FaBars, FaTimes, FaEnvelope, FaAlignJustify } from "react-icons/fa";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [btnPopup, setBtnPopup] = useState(false);
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  const items = ["Home", "Projects", "Resume", "Contact"];

  return (
    <header className="NaviBar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          {/* if showLinks is true  --> its id="hidden" else nothing*/}
          <nav r>
            <ul className="a">
              {items.map((item) => {
                return item === "Home" ? (
                  <li key={item} className="NavBar">
                    <Link to="/" className="NavBar">
                      {" "}
                      {item}
                    </Link>
                  </li>
                ) : item === "Projects" ? (
                  <li key={item} className="NavBar">
                    <Link to="projects" className="NavBar">
                      {item}
                    </Link>
                  </li>
                ) : item === "Resume" ? (
                  <li key={item} className="NavBar">
                    <Link to="resume" className="NavBar">
                      {item}
                    </Link>
                  </li>
                ) : (
                  <li key={item} className="NavBar">
                    <Link to="contact" className="NavBar">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <button>
            <FaTimes className="nav-btn nav-close-btn" onClick={showNavbar} />
          </button> */}
          </nav>
        </div>
        <button
          className="menuBtn"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <FaBars />
        </button>
        {/* <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button> */}
      </div>
      <div className="rightSide">
        {" "}
        <p className="MailMe">
          <button
            onClick={() => {
              setBtnPopup(true);
            }}
          >
            <FaEnvelope /> julik.golovenj@gmail.com
          </button>

          <PopUpForm triger={btnPopup} setBtnPopup={setBtnPopup} />
        </p>
      </div>
    </header>
  );
};

export default NavBar;
