import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-image" />
          </div>
        </div>
        <div className="about__content">
          {/* ===========cards========= */}

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>14+ Months Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ Completed</small>
            </article>
          </div>

          <p>
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad error
            ipsam soluta sit, quaerat non assumenda ab illo est illum sapiente
            tenetur blanditiis voluptas, distinctio itaque doloremque! Eaque,
            fugiat repellendus? */}
            Hii. My name is Satyajeet Singh. I am a 3rd year Btech Student in IIIT Kota.
            I am a React developer and I have been working in Web development for 7 months.
            Over time I worked on many projects and I have developed excellent skills.    
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>

          {/* ========================= */}
        </div>
      </div>
    </section>
  );
};

export default About;
