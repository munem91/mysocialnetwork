import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg" />
      {props.message}

      <div className={`${s.item} ${s.colorlike}`}>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
