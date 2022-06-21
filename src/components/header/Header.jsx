import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Satyajeet Singh</h1>
        <h2>
          {" "}
          <Typical
            loop={Infinity}
            steps={[
              "Fullstack Developer",
              2000,
              "MERN Stack Dev",
              2000,
              "React Developer",
              2000,
            ]}
          />
        </h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
