import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o96dqit",
        "template_26cvm5j",
        form.current,
        "LjTFaZU0h5Hx4i8Pk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>www.satyajeet055@gmail.com</h5>
            <a
              href="mailto:www.satyajeet055@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>satyajeet__singh055</h5>
            <a
              href="https://www.instagram.com/satyajeet___singh055/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9548******</h5>
            <a
              href="https://api.whatsapp.com/send?text=www.google.com"
              data-action="share/whatsapp/share"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
            {/* <a
              href="https://api.whatsapp.com/send?phone=+919548101918"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a> */}
          </article>
        </div>
        {/* END OF CONTACTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
