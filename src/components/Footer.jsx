import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>BELAJAR REACT JS BERSAMA REKAN REKAN BANK VICTORIA &copy;{new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
