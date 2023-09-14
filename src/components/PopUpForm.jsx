import { React, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/popup.css";
import Context from "./Context";
import { useContext } from "react";

function PopUpForm() {
  const value = useContext(Context);
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
    // props.setBtnPopup(false);
    value.setBtnPopup(false);
    alert("Email has been sent");
  };

  let formRef = useRef();

  // form disappears when clicking outside of the popup form
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!formRef.current.contains(event.target)) {
        value.setBtnPopup(false);
      }
    });
  });

  return value.btnPopup ? (
    <div className="popUp">
      <div ref={formRef} className="popUp-inner">
        <form ref={form} onSubmit={sendEmail} className="form">
          <h3>GET IN TOUCH</h3>

          <div className="inputBox">
            <input
              type="text"
              name="user_name"
              id="name"
              className="inputField"
              required="required"
            />
            <span>Name</span>
          </div>

          <div className="inputBox">
            {value.clientEmail === "" ? (
              <div>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="inputField"
                  required="required"
                />
                <span>Email</span>
              </div>
            ) : (
              <div className="inputBox">
                <input
                  type="email"
                  onChange={(event) => value.setClientEmail(event.target.value)}
                  value={value.clientEmail}
                  name="user_email"
                  id="email"
                  className="inputField"
                  required="required"
                />
              </div>
            )}
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="subject"
              id="subject"
              // placeholder="Subject"
              className="inputField"
              required="required"
            />
            <span>Subject</span>
          </div>

          <div className="inputBox">
            <textarea
              type="text"
              name="message"
              id="message"
              className="inputFieldEmail"
              required="required"
              // rows="4"
            />

            <span>Message</span>
          </div>

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
            // props.setBtnPopup(false);
            value.setBtnPopup(false);
            value.setClientEmail("");
          }}
          className="close-btn"
          style={{ fontSize: 20 }}
        >
          x
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUpForm;
