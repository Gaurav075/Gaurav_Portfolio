import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./F.css";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
     
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Gaurav Gupta. All rights reserved.</p>
          
        </div>

        <div className="footer-center">
        <a
          href="https://youtube.com/@gauravgupta2850?feature=shared"
          target="_blank"
          rel="noopener noreferrer"
          className='nounderline'
        >
          <button className="youtube-subscribe-btn">
            <FaYoutube className="youtube-icon" />
            Subscribe on YouTube
          </button>
        </a>
      </div>

        <div className="footer-right">
          <a
            href="mailto:officialgauravgupta3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Gaurav075"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gauravgupta7431/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
