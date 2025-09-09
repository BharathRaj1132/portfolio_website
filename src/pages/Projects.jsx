import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import proj1 from "../assets/project1.png"; 
import proj2 from "../assets/project2.jpg";
import proj3 from "../assets/project3.jpg";
import proj4 from "../assets/project4.jpg";

const Projects = () => {
  const projects = [
    { 
      img: proj1, 
      title: "Portfolio Website", 
      desc: "A modern portfolio website built with React and Framer Motion.",
      detail: "This project showcases my skills in building smooth animations, reusable components, and responsive UI with Framer Motion. " +
              "Here I experimented with transitions, optimized performance, and styled clean UI components to showcase my work effectively.",
      link: "https://portfolio-website-rho-nine-25.vercel.app/" 
    },
    { 
      img: proj2, 
      title: "E-commerce Store", 
      desc: "Responsive online store with cart functionality and API integration.",
      detail: "Built with React and Redux, this store integrates product APIs, cart features, and adaptive UI for all devices. " +
              "Includes product filtering, search, and checkout workflow to mimic real-world e-commerce experience.",
      link: "https://product-store-two-ecru.vercel.app/products" 
    },
    { 
      img: proj3, 
      title: "Task Management App", 
      desc: "Interactive task organizer with calendar-based scheduling.",
      detail: "A calendar-driven task app allowing users to add, complete, and schedule tasks. Built with React hooks. " +
              "It helps users organize their day-to-day workflow and boost productivity.",
      link: "https://calendar-task-app-lilac.vercel.app/" 
    },
    { 
      img: proj4, 
      title: "Contact Form", 
      desc: "A React-based contact form.",
      detail: "This app features are you can see the details after submission of form and you can download the data in .csv format.",
      link: "https://contact-form-two-henna.vercel.app/" 
    }
  ];

  // Function for smooth auto-scroll
  const handleMouseMove = (e, contentRef) => {
    if (!contentRef.current) return;
    const { top, height } = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - top; // cursor position inside card
    const scrollHeight = contentRef.current.scrollHeight - height;
    const scrollPosition = (y / height) * scrollHeight;
    contentRef.current.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((p, index) => {
          const contentRef = useRef(null);
          return (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img src={p.img} alt={p.title} />
                  <div className="project-content">
                    <h2>{p.title}</h2>
                    <p>{p.desc}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="card-back"
                  onMouseMove={(e) => handleMouseMove(e, contentRef)}
                >
                  <div className="card-back-content" ref={contentRef}>
                    <h2>{p.title}</h2>
                    <p>{p.detail}</p>
                    <a 
                      href={p.link} 
                      className="project-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
