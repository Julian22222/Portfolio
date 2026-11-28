```JS

import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";
// ankor Link to use in contacts
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import PopUpForm from "./PopUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faLayerGroup,
  faUser,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

// import { useRef } from "react";
import "../Styles/main.css";
import { FaBars } from "react-icons/fa";
import myLogo from "../IMG/logo33.png";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const value = useContext(Context);

  const [showLinks, setShowLinks] = useState(false); //show menuBtn or not
  // const [btnPopup, setBtnPopup] = useState(false);
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  // const {toLocaleTimeString()}=props;
  // const time = props.toLocaleTimeString();

  const items = ["Home", "Projects", "Resume", "Contacts"];

  const transitionProperty = showLinks ? { marginTop: "5px" } : {}; //if showLinks ==true --> marginLeft ==200 else null

  return (
    <header className="NaviBar">
      <div className="flexbox-conatiner1">
        <button className="logo-btn">
          <Link to="/">
            <img src={myLogo} alt="logoJ" width="60" height="60"></img>
          </Link>
        </button>
      </div>

      <div className="flexbox-conatiner2">
        <div
          className="links"
          style={transitionProperty}
          id={showLinks ? "hidden" : ""}
        >
          {/* if showLinks is true  --> its id="hidden" else nothing*/}
          {/* burger menu btns */}
          <nav>
            {/* Burger menu close btn */}
            <button
              onClick={() => {
                setShowLinks(false);
              }}
              className="x-button-menu"
            >
              x
            </button>
            {/* by clicking any button in menu it will direct you to correct Component */}
            <ul className="a">
              {items.map((item) => {
                return item === "Home" ? (
                  // showLinks ? <FontAwesomeIcon icon={faHouse} /> : "",
                  <li key={item} className="NavBar_el">
                    <Link
                      onClick={() => {
                        setShowLinks(false);
                      }}
                      to="/"
                      className="NavBar-item"
                    >
                      {/* show Home, project, resume, contacts Icon in the side menu bar */}
                      {showLinks ? (
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="social-side-menu-icons"
                        />
                      ) : (
                        ""
                      )}
                      {item}
                    </Link>
                  </li>
                ) : item === "Projects" ? (
                  <li key={item} className="NavBar_el">
                    <Link
                      onClick={() => {
                        setShowLinks(false);
                      }}
                      to="projects"
                      className="NavBar-item"
                    >
                      {/* show Home, project, resume, contacts Icon in the side menu bar */}
                      {showLinks ? (
                        <FontAwesomeIcon
                          icon={faLayerGroup}
                          className="social-side-menu-icons"
                        />
                      ) : (
                        ""
                      )}
                      {item}
                    </Link>
                  </li>
                ) : item === "Resume" ? (
                  <li key={item} className="NavBar_el">
                    <Link
                      onClick={() => {
                        setShowLinks(false);
                      }}
                      to="resume"
                      className="NavBar-item"
                    >
                      {/* show Home, project, resume, contacts Icon in the side menu bar */}
                      {showLinks ? (
                        <FontAwesomeIcon
                          icon={faUser}
                          className="social-side-menu-icons"
                        />
                      ) : (
                        ""
                      )}
                      {item}
                    </Link>
                  </li>
                ) : (
                  <li key={item} className="NavBar_el">
                    <HashLink
                      onClick={() => {
                        setShowLinks(false);
                      }}
                      to="/#contactCard"
                      className="NavBar-item"
                    >
                      {/* show Home, project, resume, contacts Icon in the side menu bar */}
                      {showLinks ? (
                        <FontAwesomeIcon
                          icon={faBook}
                          className="social-side-menu-icons"
                        />
                      ) : (
                        ""
                      )}
                      {item}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {showLinks ? <hr /> : ""}

          {/* ///////////////////// social-Icons in side menu bar bottom*/}
          <div className="menu-btn-social-Icons">
            <form action="https://linkedin.com/groups/5066326/">
              <button className="btn-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="social-menu-bar-bottom"
                />
              </button>
            </form>

            <form action="https://whatsapp.com/">
              <button className="btn-icon">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="social-menu-bar-bottom"
                />
              </button>
            </form>

            <form action="https://github.com/Julian22222">
              <button className="btn-icon">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social-menu-bar-bottom"
                />
              </button>
            </form>

            <form action="https://discordapp.com/users/Julian.Iam#6241">
              <button className="btn-icon">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="social-menu-bar-bottom"
                />
              </button>
            </form>

            <form action="https://t.me/JulianGoloven">
              <button className="btn-icon">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="social-menu-bar-bottom"
                />
              </button>
            </form>
          </div>
        </div>




        <button
          className="menuBtn"
          onClick={() => {
            setShowLinks(!showLinks);
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
            <p className="email-name">julik.golovenj@gmail.com</p>
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

// $(".menuBtn").on("click", function () {
//   $("flexbox-conatiner2 #hidden").toggleClass("show");
// });

// $("button").click(function(){
//   $get("demo_test.asp",)
// });

export default NavBar;



```
