import { Link } from "react-router-dom";

import myLogo from "../IMG/logo33.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowRight,
  //   faLinkedin,
  //   faLinkedinIn,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const dateTime = new Date();

const Footer = () => {
  return (
    <footer id="contactCard">
      <div className="row">
        <div className="col">
          <img src={myLogo} className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officiis, ratione eum cupiditate perspiciatis aut veniam doloribus
            voluptate nesciunt. Beatae.
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>some Road</p>
          <p>Great Manchester</p>
          <p>Salford, Uk</p>
          <p className="email-id">julik.golovenj@gmail.com</p>
          <h4>+44-789-2828-653</h4>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              {" "}
              <Link to="/Portfolio">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              {" "}
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              {" "}
              <a href="Portfolio#contactCard">Contacts</a>
              {/* <Link to="/contact">Contacts</Link> */}
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Get in touch</h3>
          <form className="emailForm">
            <FontAwesomeIcon
              icon={faEnvelope}
              bounce
              className="envelope-footer"
            />
            <input type="email" placeholder="Enter your email" required></input>
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight} fade />
            </button>
          </form>
          <div className="social-icons">
            <form action="https://www.linkedin.com/groups/5066326/">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="single-icon" />
              </button>
            </form>

            <form action="https://www.whatsapp.com/">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faWhatsapp} className="single-icon" />
              </button>
            </form>

            <form action="https://github.com/Julian22222">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faGithub} className="single-icon" />
              </button>
            </form>

            <form action="https://discordapp.com/users/Julian.Iam#6241">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faDiscord} className="single-icon" />
              </button>
            </form>

            <form action="https://t.me/JulianGoloven">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faTelegram} className="single-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Portfolio © {dateTime.toLocaleDateString().slice(-4)} - All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
