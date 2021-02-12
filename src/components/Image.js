import React from 'react';
import pic from '..//pics/landing_img.jpg';
// import pic2 from '..//pics/landing_img_small.jpg';
import Image from 'react-bootstrap/Image';
import './image.css';

const mainimage = () => {
  return <Image id='imagecollapse' src={pic} width='2000' fluid/>;
};

export default mainimage;

{/* <Image id='imagecollapse' src={pic} width='2000' fluid/>; */}