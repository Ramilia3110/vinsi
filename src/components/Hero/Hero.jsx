import React from "react";
import ava from "./../../assets/ava.jpg";
import screenshot from "./../../assets/s.png";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import { RiShareBoxFill } from "react-icons/ri";

import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.icons}>
        <a href="">
          <IoBookmarkOutline />
        </a>
        <a href="">
          <IoShareSocialOutline />
        </a>
        <a href="">
          <RiShareBoxFill />
        </a>
      </div>
      <div className={s.content}>
        <h5>Honorable Mention - Nov 20, 2024</h5>
        <h1>Shane Collier</h1>
        <div className={s.author}>
          <img src={ava} alt="avatar of author" />
          <div className={s.name}>
            <h5>Shane Collier</h5>
            <p>Pro</p>
          </div>
        </div>
        <div className={s.screenshot}>
          <img src={screenshot} alt="" />
        </div>
        <h5 className={s.text}>
          Defined by a bold structure and striking visuals, this portfolio marks
          the next step in my career, capturing a creative evolution that
          celebrates growth and transformation.
        </h5>
      </div>
    </section>
  );
};

export default Hero;
