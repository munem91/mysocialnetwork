import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div className={`${s.content} ${s.two}`}>
        <img src="https://c4.wallpaperflare.com/wallpaper/505/523/738/tropical-beach-4k-high-resolution-widescreen-wallpaper-preview.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava and des</div>

    </div>
  );
};

export default ProfileInfo;
