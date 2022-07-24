import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={`${s.content} ${s.two}`}>
        <img src="https://c4.wallpaperflare.com/wallpaper/505/523/738/tropical-beach-4k-high-resolution-widescreen-wallpaper-preview.jpg" />
      </div>
      <div>ava and des</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
