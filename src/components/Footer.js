import React from "react";
import { FaHeart } from 'react-icons/fa';

function Footer() {
  // const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="center-align">Made with <FaHeart className="heart"/> by <a href="https://leo-frontend.netlify.app/" rel="noopener noreferrer" target="_blank">Leonel Oliveira</a></p>
    </footer>
  );
}

export default Footer;