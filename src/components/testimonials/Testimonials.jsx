import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Satyam singh",
    review: "It's fun making new things that pops into your head.",
  },
  {
    avatar: AVTR2,
    name: "Satyam singh",
    review: "Work in progress.",
  },
  {
    avatar: AVTR3,
    name: "Satyam singh",
    review: "Work in progress.",
  },
  {
    avatar: AVTR4,
    name: "Satyam singh",
    review: "Work in progress.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="client__name">hallo mate</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            eveniet enim exercitationem repellendus! Accusantium, culpa aut
            voluptas ipsam ea aliquam, eaque vel et repudiandae nostrum fugiat
            eius illum nam?
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className="client__name">hallo mate</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            eveniet enim exercitationem repellendus! Accusantium, culpa aut
            voluptas ipsam ea aliquam, eaque vel et repudiandae nostrum fugiat
            eius illum nam?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className="client__name">hallo mate</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            eveniet enim exercitationem repellendus! Accusantium, culpa aut
            voluptas ipsam ea aliquam, eaque vel et repudiandae nostrum fugiat
            eius illum nam?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className="client__name">hallo mate</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            eveniet enim exercitationem repellendus! Accusantium, culpa aut
            voluptas ipsam ea aliquam, eaque vel et repudiandae nostrum fugiat
            eius illum nam?
          </small>
        </article> */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
