import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "../styles/home.css";
import profileImage from "../assets/profile.png"; 
import Chatbot from "./Chatbot"; 

const Home = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      
      navigate("/projects");
    }
  };

  return (
    <div className="home-container">
      
      <aside className="social-sidebar" aria-hidden="false">
        <a
          href="https://www.linkedin.com/in/bharath-raj-react-developer/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaLinkedin />
          <span className="label">LinkedIn</span>
        </a>
        <a
          href="https://github.com/BharathRaj1132"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaGithub />
          <span className="label">GitHub</span>
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaTwitter />
          <span className="label">Twitter</span>
        </a>
      </aside>

     
      <motion.div
        className="intro-text"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I'm <span>Bharath Raj</span>
        </h1>

        <h2 className="typed-subtitle" aria-live="polite">
          <Typewriter
            words={[
              "Frontend Developer",
              "React.js Specialist",
              "Web Developer",
              "Web Performance Optimizer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1400}
          />
        </h2>

        <p className="intro-paragraph">
          With 3+ years of experience in frontend development, I create fast, responsive,
          and visually appealing interfaces. My work blends clean code, modern design, 
          and attention to detail to deliver smooth, engaging user experiences.
        </p>

        <div className="cta-row">
          <button className="btn primary" onClick={handleViewWork}>
            View My Work
          </button>

          <a className="btn outline" href="/resume.pdf" download>
            <FaDownload style={{ marginRight: 8 }} />
            Download Resume
          </a>
        </div>
      </motion.div>

      
      <motion.div
        className="profile-image"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        <div className="image-wrap">
          <img src={profileImage} alt="Bharath Raj — Frontend Developer" />
        </div>
      </motion.div>

      
      <Chatbot />
    </div>
  );
};

export default Home;
