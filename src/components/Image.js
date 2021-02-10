import React from 'react';
import pic from './landing_img.jpg';
import Image from 'react-bootstrap/Image';

const mainimage = () => {
  return <Image src={pic} width='2000' fluid />;
};

export default mainimage;
