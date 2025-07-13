import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Eventify",
    description: "Web-Based Event Management Platform.",
    image: "/Eventify.png",
    link: "https://rococo-marshmallow-1d6fa6.netlify.app/"
  },
  {
    title: "Feastify",
    description: "A mobile app using Flutter for food ordering and delivery.",
    image: "/Feastify.png",
    qrCodeImage: "/FeastifyQR.png"
  }
];

const Projects = () => (
  <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
    <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>Projects</motion.h2>
    <motion.div className="project-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
      {projects.map((proj, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}>
          <ProjectCard {...proj} />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default Projects;