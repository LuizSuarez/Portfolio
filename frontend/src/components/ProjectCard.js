import React from "react";

const ProjectCard = ({ title, description, image, link, qrCodeImage }) => {
  const linkStyle = {
    display: "inline-block",
    textAlign: "center",
    padding: "12px 16px",
    marginTop: "12px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007bff",
    borderRadius: "4px",
    width: "fit-content",
  };

  const qrContainerStyle = {
    marginTop: "12px",
    padding: "12px 16px",
    backgroundColor: "#f8f8f8",
    borderRadius: "4px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  };

  const qrTextStyle = {
    marginTop: "8px",
    color: "#007bff",
    fontWeight: "500",
  };

  return (
    <div className="project-card" style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "6px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>

      {qrCodeImage ? (
        <div style={qrContainerStyle}>
          <img
            src={qrCodeImage}
            alt={`${title} QR Code`}
            style={{ width: "150px", height: "150px" }}
          />
          <p style={qrTextStyle}>Scan QR to view the app</p>
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
