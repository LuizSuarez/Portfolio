import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "HTML5",
  "Continuous Integration/Deployment (CI/CD)",
  "REST APIs",
  "Deployment (Vercel, Render, Railway, Netlify)",
  "Agile Methodologies",
  "Version Control (GitHub)",
  "Debugging",
  "Testing (Jest)",
  "API Development",
  "Authentication (JWT, OAuth)",
];

const About = () => (
  <motion.section className="about-section" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
    <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>About Me</motion.h2>
    <motion.p className="about-bio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
      I'm a passionate Computer Science student (6th semester) with a strong interest in full-stack web development. I enjoy building scalable, user-friendly applications and constantly learning new technologies.
    </motion.p>
    <motion.div className="about-details" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
      <div className="about-skills">
        <h3>Skills</h3>
        <ul className="skills-grid">
          {skills.map(skill => (
            <motion.li key={skill} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>{skill}</motion.li>
          ))}
        </ul>
      </div>
      <div className="about-edu">
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science<br />[Air University], 2022-Present</p>
        <p>Matric & FSc<br />[Fazaia Intermediate College], 2018-2022</p>
      </div>
    </motion.div>
  </motion.section>
);

export default About; 