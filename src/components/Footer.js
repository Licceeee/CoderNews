import React from "react";
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">     
        <a className="footer-a" href="index.html" id="guidelines">
          Guidelines
        </a>
        <a className="footer-a" href="index.html">
          FAQ
        </a>
        <a className="footer-a" href="index.html">
          Lists
        </a>
        <a className="footer-a" href="index.html">
          API
        </a>
        <a className="footer-a" href="index.html">
          Security
        </a>
        <a className="footer-a" href="index.html">
          Legal
        </a>
        <a className="footer-a" href="index.html">
          Apply to CN
        </a>
        <a className="footer-a" href="https://github.com/EmelineLmr/coderNews#">
          Contact
        </a>
        <Col className="text-md-right" id="copyright">
          {/* warum funktioniert das text-md-right nicht? */}
          2021 © Copyright: Emeline, Alicia, Tim {/* was bedeutet diese {" "}? */}
        </Col>
    </footer>
  );
};

export default Footer;
