import React from "react";
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">     
        <a className="footer-a" href="https://github.com/Licceeee/coderNews">
          GitHub
        </a>
        <Col className="text-md-right" id="copyright">
          2021 © Copyright: Alicia, Emeline, Tim
        </Col>
    </footer>
  );
};

export default Footer;
