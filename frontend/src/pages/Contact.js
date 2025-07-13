import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
    <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>Contact Me</motion.h2>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
      <ContactForm />
    </motion.div>
  </motion.div>
);

export default Contact; 