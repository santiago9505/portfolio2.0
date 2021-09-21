import React, { useState } from "react";

import { db } from "../firebase";

//assets
import Email from "../assets/static/email-icon.png";
import Whatsapp from "../assets/static/whatsapp-icon.png";

//styles
import "../assets/styles/Contact.css";

const Contact = ({ theme, setTheme }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        lastName: lastName,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thanks, your message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  return (
    <main className="contact__container">
      <div className="form__container">
        <h1 className="form__title">CONTACT ME</h1>
        <form className="form" onSubmit={handleSubmit} action="">
          <label className="form__item" htmlFor="">
            <span>Name</span>
            <input
              className="input"
              placeholder="Jhon"
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="firstName"
              value={name}
              required
            />
          </label>
          <label className="form__item" htmlFor="">
            <span>Last Name</span>
            <input
              className="input"
              placeholder="Katzenbach"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="lastName"
              value={lastName}
              required
            />
          </label>
          <label className="form__item" htmlFor="">
            <span>Email</span>
            <input
              className="input"
              placeholder="psicoanalista@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
              required
            />
          </label>
          <label className="form__item" htmlFor="">
            <span>Message</span>
            <textarea
              className="text__area input"
              placeholder="Hello Santiago, let's work together..."
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              value={message}
              required
            />
          </label>
          <button
            className="contact__button--submit"
            placeholder="Send"
            type="submit"
            style={{ background: loader ? "#ccc" : "#3475cf" }}
          >
            SEND
          </button>
        </form>
      </div>
      <article className="contact__data--section">
        <h1
          className={
            theme ? "contact__title contact__title--light" : "contact__title"
          }
        >
          Let's Work Together!
        </h1>
        <h2 className="contact__items">
          <img src={Email} alt="email-icon" />{" "}
          <a
            className={
              theme ? "contact__link contact__link--light" : "contact__link"
            }
            href="mailto:santigeek@hotmail.com"
          >
            santigeek@hotmail.com
          </a>
        </h2>
        <h2 className="contact__items">
          <img src={Whatsapp} alt="whatsapp-icon" />{" "}
          <a
            className={
              theme ? "contact__link contact__link--light" : "contact__link"
            }
            href="https://wa.me/qr/XCYPFO7562ULM1"
          >
            +57 3195619977
          </a>
        </h2>
      </article>
    </main>
  );
};

export default Contact;
