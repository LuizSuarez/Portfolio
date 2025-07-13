import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const summary = "I’m a 6th-semester Computer Science student with a growing interest in web development. While I may not be an expert yet, I’m passionate about learning and improving my skills to build high-quality, user-friendly websites that make a difference.";

const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.8, ease: "easeInOut" }
  }
};

const Home = () => (
  <section className="home-hero">
    <motion.div className="hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
        Hi, I'm <span className="highlight">Abdul Moeez</span>
      </motion.h1>
      <motion.p className="hero-subtitle" variants={typewriter} initial="hidden" animate="visible" style={{ overflow: "hidden", whiteSpace: "nowrap", borderRight: "2px solid var(--primary)", width: "fit-content" }}>
        6th-semester Computer Science student & aspiring <span className="highlight">Web App Developer</span>.
      </motion.p>
      <motion.p className="hero-desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
        {summary}
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/contact" className="btn-secondary">Contact Me</Link>
      </motion.div>
    </motion.div>
    <motion.div className="hero-image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
      <img src="/Profile.png" alt="Web Developer" style={{ boxShadow: "0 8px 32px rgba(30, 144, 255, 0.13)", borderRadius: "12px" }} />
    </motion.div>
  </section>
);

export default Home; 