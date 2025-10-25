import React from "react";

// Article component
// Receives 'title', 'date', and 'preview' props
// Uses default date if none is provided
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;