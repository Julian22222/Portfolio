import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/popup.css";

function PopUpForm(props) {
  // const [emailForm, setEmailForm] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsfdvpf",
        "template_t0s03b2",
        form.current,
        "7gosvjHmBCzu1eZGC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
    props.setBtnPopup(false);
    alert("Email has been sent");
  };

  return props.triger ? (
    <div className="popUp">
      <div className="popUp-inner">
        <form ref={form} onSubmit={sendEmail} className="form">
          <h3>GET IN TOUCH</h3>
          <label>Name</label>
          <br></br>

          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Your name"
            className="inputField"
            required
          ></input>
          <br></br>
          <label>Your email address</label>
          <br></br>

          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Insert your email"
            className="inputField"
            required
          ></input>
          <br></br>

          <label>Subject</label>
          <br></br>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="inputField"
          ></input>
          <br></br>

          <label>Message</label>
          <br></br>
          <textarea
            required
            type="text"
            name="message"
            id="message"
            placeholder="Insert your message"
            className="inputFieldEmail"
            // rows="4"
          ></textarea>
          <br></br>
          {/* <input
            type="hidden"
            id="myEmail"
            name="myEmail"
            value="julik.golovenj@gmail.com"
          ></input> */}
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
        <button
          onClick={() => {
            props.setBtnPopup(false);
          }}
          className="close-btn"
        >
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUpForm;
