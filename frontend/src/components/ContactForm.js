import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/api/contact",
        form
      );
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  const buttonStyle = {
    display: "inline-block",
    textAlign: "center",
    padding: "12px 16px",
    marginTop: "12px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007bff",
    borderRadius: "4px",
    width: "fit-content",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500"
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit" style={buttonStyle}>Send</button>
      <div>{status}</div>
    </form>
  );
};

export default ContactForm; 