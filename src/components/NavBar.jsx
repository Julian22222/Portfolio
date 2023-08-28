import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";
// ankor Link to use in contacts
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import PopUpForm from "./PopUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useRef } from "react";
import "../Styles/main.css";
import { FaBars } from "react-icons/fa";
import myLogo from "../IMG/logo33.png";

const NavBar = () => {
  const value = useContext(Context);

  const [showLinks, setShowLinks] = useState(false);
  // const [btnPopup, setBtnPopup] = useState(false);
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  // const {toLocaleTimeString()}=props;
  // const time = props.toLocaleTimeString();

  const items = ["Home", "Projects", "Resume", "Contacts"];

  return (
    <header className="NaviBar">
      <div className="flexbox-conatiner1">
        <button className="logo-btn">
          <Link to="/Portfolio">
            <img src={myLogo} alt="logoJ" width="60" height="60"></img>
          </Link>
        </button>
      </div>
      <div className="flexbox-conatiner2">
        <div className="links" id={showLinks ? "hidden" : ""}>
          {/* if showLinks is true  --> its id="hidden" else nothing*/}
          <nav>
            <ul className="a">
              {items.map((item) => {
                return item === "Home" ? (
                  <li key={item} className="NavBar">
                    {/* <button onClick="showLinks ===false"> */}
                    <Link to="/Portfolio" className="NavBar-item">
                      {item}
                    </Link>
                    {/* </button> */}
                  </li>
                ) : item === "Projects" ? (
                  <li key={item} className="NavBar">
                    <Link to="projects" className="NavBar-item">
                      {item}
                    </Link>
                  </li>
                ) : item === "Resume" ? (
                  <li key={item} className="NavBar">
                    <Link to="resume" className="NavBar-item">
                      {item}
                    </Link>
                  </li>
                ) : (
                  <li key={item} className="NavBar">
                    <HashLink
                      to="/Portfolio#contactCard"
                      className="NavBar-item"
                    >
                      {item}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          className="menuBtn"
          onClick={() => {
            setShowLinks(!showLinks);
            // setShowLinks(showLinks === true);
          }}
        >
          <FaBars />
        </button>
      </div>
      <div className="flexbox-conatiner3">
        {" "}
        <p className="MailMe">
          <button
            onClick={() => {
              value.setBtnPopup(true);
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              beatFade
              className="envelope-logo-main"
            />
            julik.golovenj@gmail.com
          </button>

          {/* <PopUpForm triger={btnPopup} setBtnPopup={setBtnPopup} /> */}
          <PopUpForm />
        </p>
      </div>
      <div className="underline">
        <span></span>
      </div>
    </header>
  );
};

export default NavBar;
