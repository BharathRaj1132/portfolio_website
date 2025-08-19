import React from "react";
import "../styles/skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "React.js", level: 92 },
    { name: "Redux", level: 85 },
    { name: "Bootstrap", level: 87 },
    { name: "Git / GitHub", level: 80 },
    { name: "Responsive Design", level: 90 },
  ];

  const certifications = [
    { title: "React Developer Certification", link: "https://example.com/react-cert" },
    { title: "JavaScript Advanced Certificate", link: "https://example.com/js-cert" },
    { title: "HTML5 & CSS3 Mastery", link: "https://example.com/html-css-cert" },
  ];

  return (
    <section className="skills">
      <center><h1 className="skills-title">My Skills & Certifications</h1></center>
      
      <div className="skills-cert-container">
        {/* Left Column - Skills */}
        
        <div className="skills-container">
          <h2 className="cert-title">Skills</h2>
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Certifications */}
        <div className="certifications">
          <h2 className="cert-title">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
              >
                <div className="cert-icon">📜</div>
                <p>{cert.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
