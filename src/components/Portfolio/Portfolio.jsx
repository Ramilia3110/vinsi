import React, { useEffect, useRef, useState } from "react";
import s from "./Portfolio.module.scss";
import Mockup from "../Mockup/Mockup";

import firstPage from "../../assets/iphone-1.jpg";
import secondPage from "../../assets/secondPage.jpg";
import thirdPage from "../../assets/thirdPage.jpg";
import fourthPage from "../../assets/fourthPage.jpg";
import cappadocia from "../../assets/cappadocia.jpg";
import cappadocia2 from "../../assets/cappadocia2.jpg";
import cappadocia3 from "../../assets/cappadocia3.jpg";
import cappadocia4 from "../../assets/cappadocia4.jpg";
import dashboard from "./../../assets/dashboard.jpg";

const bgImages = [cappadocia, cappadocia2, cappadocia3, cappadocia4];

const images = [firstPage, secondPage, thirdPage, fourthPage];

const Portfolio = () => {
  const wrappersRef = useRef([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [bgImages.length]);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          setTimeout(() => {
            target.classList.add(s.show);
          }, i * 200); // delay like animation
        } else {
          target.classList.remove(s.show); // <-- remove class when out of view
        }
      });
    }, options);

    wrappersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      wrappersRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={s.portfolio}>
      <h3 className={s.subtitle}> Digital Solutions For your Business</h3>
      <section className={s.mobileApp}>
        {images.map((img, index) => (
          <div
            className={s.iphoneWrapper}
            key={index}
            ref={(el) => (wrappersRef.current[index] = el)}
          >
            <Mockup img={img} />
          </div>
        ))}
      </section>
      <h2 className={s.title}>Our recent projects </h2>
      <div
        className={s.project1}
        style={{ backgroundImage: `url(${bgImages[current]})` }}
      ></div>
      <h2 className={s.title}>We have ideas for all type of Business </h2>
      <section className={s.dashboardShowcase}>
        <div className={s.text}>
          <h2>Empowering Companies with Stunning Dashboards</h2>
          <p>
            We create powerful, modern, and intuitive dashboards that turn
            complex data into clear insights. From real-time analytics to
            seamless user experience — imagine it, and we'll build it.
          </p>
          <button>Let's Work Together</button>
        </div>
        <div className={s.image}>
          <img src={dashboard} alt="Example of dashboard design" />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
