import React from "react";
import Article from "./Article";

// ArticleList component
// Receives 'posts' array and renders an Article for each post
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;