import React from 'react';
import './BackgroundMotion.css';

const BackgroundMotion = () => {
  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    objectFit: "cover", // Ensures the video covers the entire area
    zIndex: -1, // Keep it behind other content
  };
  return (
      <div>
        <video style={videoStyle} autoPlay loop muted>
          <source
            src="/Video/motion-back.mp4"
            type="video/mp4"
          />
        </video>
      </div>
  );
}

export default BackgroundMotion;
