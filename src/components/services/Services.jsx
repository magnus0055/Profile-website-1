import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Investigating user experience design requirements for our suite
                of digital assets.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing a comprehensive UI/UX design strategy for the brand.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing UI elements and tools such as navigation menus, search
                boxes, tabs, and widgets for our digital assets.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Producing high-quality UX design solutions through wireframes,
                visual and graphic designs.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Website and software application designing, building, or
                maintaining.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Evaluating code to ensure it meets industry standards, is valid,
                is properly structured, and is compatible with browsers,
                devices, or operating systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Identifying problems uncovered by customer feedback and testing,
                and correcting or referring problems to appropriate personnel
                for correction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Editing, writing, or designing Website content, and directing
                team members who produce content.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Directing or performing Website updates.</p>
            </li>
          </ul>
        </article>
        {/* =====END OF WEB DEVELOPMENT============ */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing, reviewing, editing, and updating content for company
                websites, blogs, marketing materials, and similar platforms.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting research and interviews to learn more about current
                trends, developments, and perceptions about the subject matter,
                and then contextualizing your findings.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Using social media to engage consumers, respond to questions or
                complaints, and to promote company initiatives.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring social media and company website metrics.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  );
};

export default Services;
