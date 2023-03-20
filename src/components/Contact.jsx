import { FaEnvelope, FaPhone, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import logo from "../IMG/pngwing.com (1).png";
import logo from "../IMG/clipart1502514.png";

const Contact = () => {
  return (
    <div>
      <div class="flex-container-contact">
        <div class="wrapperContact">
          <div>
            {" "}
            <FaEnvelope className="Envelope" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FaPhone className="Phone" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FaLinkedinIn className="LinkedIn" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FaGithub className="GitHub" />
          </div>
        </div>

        <div class="item item-2">
          {/* <hr className="HomeLine"></hr> */}
          <h1 className="ContactInfo">Contact Info</h1>
          <hr className="ContactText"></hr>
          <h2 className="ContactInfo"> Email address:</h2>
          <h2 className="ContactText"> julik.golovenj@gmail.com</h2>
          <h2 className="ContactInfo">Phone:</h2>
          <h2 className="ContactText"> 07892828653</h2>
          <h2 className="ContactInfo">LinkedIn Link:</h2>
          <h2 className="ContactText">
            <a href="https://www.linkedin.com/groups/5066326/" target="_blank">
              https://www.linkedin.com/groups/5066326/
            </a>
          </h2>
          <h2 className="ContactInfo">GitHub Link:</h2>{" "}
          <h2 className="ContactText">
            <a href="https://github.com/Julian22222" target="_blank">
              https://github.com/Julian22222
            </a>
          </h2>
          <img src={logo} alt="pinguin" className="pinguin"></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
