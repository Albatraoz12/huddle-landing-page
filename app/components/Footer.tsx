import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className='icon-container'>
        <BsFacebook className='icon' size={35} />
      </div>
      <div className='icon-container'>
        <BsTwitter className='icon' size={35} />
      </div>
      <div className='icon-container'>
        <BsInstagram className='icon' size={35} />
      </div>
    </footer>
  );
};

export default Footer;
