import React from "react";
import pic from "..//pics/landing_img.jpg";
import picSmall from "..//pics/landing_img_small.jpg";
import Image from "react-bootstrap/Image";
import "./image.css";

const mainimage = () => {
  return (
    <Image
      id="imagecollapse"
      src={window.innerWidth > 768 ? pic : picSmall}
      alt="Astanga jóga Mysore-ban"
      width="2000"
      fluid
    />
  );
};

export default mainimage;
