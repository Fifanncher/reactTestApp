import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://teniteatr.ru/uploads/main_image/image/632/image_IMG_6618.jpg"
          alt=""
        ></img>
      </div>
      <div className={s.descriptionBlock}>ava + desc https://static.knigavuhe.org/poster.jpg</div>
    </div>
  );
};

export default ProfileInfo;
