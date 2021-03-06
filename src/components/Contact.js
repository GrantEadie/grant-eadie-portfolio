import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import * as v from "./PageVariants";
import emailjs from "emailjs-com";

function Contact() {
  const [sendFormResult, handleSendFormResult] = useState(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sm55lsb",
        "template_tt9qgul",
        e.target,
        "user_w8sHIJyUnS3FlWLFhzzOu"
      )
      .then(
        (result) => {
          handleSendFormResult(
            <p>
              Your message has been sent! <br></br>
              <br /> Thanks for getting in contact :)
            </p>
          );
        },
        (error) => {
          handleSendFormResult(<p>Whoops, this message didn't send :(</p>);
        }
      );
  }

  if (sendFormResult) {
    return (
      <motion.div
        style={{ position: "absolute", width: "100vw" }}
        initial="initial"
        animate="in"
        exit="out"
        variants={v.pageVariants}
        transition={v.pageTransitions}
        className="bg-transparent about-grid-container"
      >
        <div className="login">
          <div className="loginContainer">
            <p>{sendFormResult}</p>
            <button onClick={() =>handleSendFormResult(null)} style={{marginTop: '20px'}} className="btn btn-outline-secondary btn-block btn-sm">back</button>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        style={{ position: "absolute", width: "100vw" }}
        initial="initial"
        animate="in"
        exit="out"
        variants={v.pageVariants}
        transition={v.pageTransitions}
        className="bg-transparent about-grid-container"
      >
        <div class="square1"></div>
        <div class="square2">
          <h1>Contact</h1>
          <hr />
          <form onSubmit={sendEmail}>
            <fieldset>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="form-control"
                    name="user_name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email"></label>
                  <input
                    name="user_email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <textarea
                name="user_message"
                className="form-control"
                placeholder="Message"
                style={{ height: "140px" }}
                required
              ></textarea>
            </fieldset>

            <button
              type="submit"
              style={{ marginTop: "20px" }}
              className="btn btn-outline-secondary btn-block"
            >
              Send me a message
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "5vh" }}>
            <a href="https://github.com/GrantEadie"  rel="noreferrer" target="_blank">
              <svg
                className="socials"
                style={{ marginRight: "15px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/grant-eadie/" rel="noreferrer" target="_blank">
              <svg
                style={{ marginRight: "15px" }}
                className="socials"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
            <a className="emailContact" rel="noreferrer" target="_blank" href="mailto:grantleadie@gmail.com">
              grantleadie@gmail.com
            </a>
          </p>
        </div>
        <div class="square3"></div>
      </motion.div>
    );
  }
}

export default Contact;
