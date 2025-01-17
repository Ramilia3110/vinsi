import React from "react";
import s from "./Card.module.scss";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

const Card = ({ img, text1, text2 }) => {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <img src={img} alt="" />
        <div className={s.content}>
          <div className={s.title}>
            <h4>Element</h4>
            <p>{text2}</p>
          </div>
          <div className={s.icons}>
            <a href="#">
              <IoBookmarkOutline />
            </a>
            <a href="#">
              <IoShareSocialOutline />
            </a>
          </div>
        </div>
      </div>
      <div className={s.desc}>
        {text1} <span>from</span> {text2}
      </div>
    </div>
  );
};

export default Card;
