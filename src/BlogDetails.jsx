import React from "react";

const BlogDetails = () => {
  // Dummy blog content for now
  const blog = {
    title: "Why React is Fun",
    body: "React feels smooth once you get the hang of hooks, components, and JSX. It lets you build UIs fast and clean.",
    author: "Vishwas"
  };

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p className="author">Written by {blog.author}</p>
      <div className="details-body">{blog.body}</div>
    </div>
  );
};

export default BlogDetails;
