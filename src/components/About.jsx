import React from "react";

// About component
// Receives 'image' and 'about' props
// Uses a default image if none is provided
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;