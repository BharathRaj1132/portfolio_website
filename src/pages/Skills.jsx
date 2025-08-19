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
    { title: "React.js Essentials", link: "https://verify.letsupgrade.in/certificate/LUERJSJUN123259" },
    { title: "Webpack basics", link: "https://www.udemy.com/certificate/UC-2da0a08a-293c-49f8-8835-1987bffeb274/" },
    { title: "Microsoft Certified Azure Fundamentals", link: "https://learn.microsoft.com/en-us/users/bharathrajs-1739/credentials/fbf15ef256486f6?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
    { title: "Linux Administration with command line", link: "https://www.udemy.com/certificate/UC-1e482489-72e1-4059-a948-442aa65c8d9b/" },
    { title: "Carrier essentials in generative AI", link: "https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin?trk=share_android_learning_path_learning&shareId=MzQHZLpIRfGeMsCtOcHnCQ%3D%3D" },
    { title: "SQL Essentials", link: "https://verify.letsupgrade.in/certificate/LUESQLJUL123596" },
    { title: "HTML & CSS Bootcamp", link: "https://verify.letsupgrade.in/certificate/LUEHTMLJUL123244" },
    
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
