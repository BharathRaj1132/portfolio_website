import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const timeline = [
    {
      year: "Aug 2022 - Present",
      title: "Frontend Developer at TCS",
      desc: "Developing modern, responsive, and interactive web applications using React.js, Redux, and JavaScript.",
      details: (
        <>
          <h2>Roles & Responsibilities</h2>
          <ul>
            <li>Built responsive and performant web apps with React.js, Reactflow, and TypeScript</li>
            <li>CLed UI development ensuring pixel-perfect layouts based on Figma designs.</li>
            <li>Implemented scalable architecture with Redux, Context API, and Hooks.</li>
          </ul>
        </>
      )
    },
    {
      year: "Sep 2022 - Dec 2024",
      title: "MCA, Anna University (Distance), Chennai",
      desc: "Pursuing Master of Computer Applications via distance learning.",
      details: (
        <>
          <h2>Post Graduation (MCA)</h2>
          <p>
            Advanced coursework in <b>software engineering</b>, <b>distributed systems</b>, 
            and <b>cloud technologies</b>. Exposure to enterprise-level applications.
          </p>
        </>
      )
    },
    {
      year: "June 2019 - May 2022",
      title: "BCA, VIT University, Vellore",
      desc: "Graduated with a Bachelor’s in Computer Applications.",
      details: (
        <>
          <h2>Undergraduate (BCA)</h2>
          <p>
            Learned fundamentals of programming, data structures, and web tech.  
            Built an <b>online Fitness management system</b> for final year project.
          </p>
        </>
      )
    }
  ];

  const personalityData = [
    { trait: "Creativity", level: 80 },
    { trait: "Problem-Solving", level: 90 },
    { trait: "Communication", level: 95 },
    { trait: "Focus", level: 95 },
    { trait: "Humor", level: 60 }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        Crafting digital experiences that blend <span>aesthetic precision</span>{" "}
        with purposeful functionality, I turn concepts into interfaces that
        resonate. Guided by curiosity and<span> commitment</span>, I
        continuously evolve to deliver solutions that adapt to changing needs.
      </p>

      <div className="about-grid">
        {/* Timeline Section */}
        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>

              {/* Hover Card */}
              {hoverIndex === index && (
                <motion.div
                  className="hover-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.details}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Personality Map Section */}
        <motion.div
          className="personality-map"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Personality Map</h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={personalityData}>
              <PolarGrid stroke="var(--card-border)" />
              <PolarAngleAxis dataKey="trait" stroke="var(--text)" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="var(--muted)" />
              <Radar
                name="Profile"
                dataKey="level"
                stroke="var(--accent)"
                fill="var(--accent)"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
