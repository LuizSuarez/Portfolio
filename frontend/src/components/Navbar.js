import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, color: "#fff" }}>
      <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
      <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
      <li><Link to="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</Link></li>
      <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar; 