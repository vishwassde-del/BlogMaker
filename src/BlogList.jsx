import React from "react";

const BlogList = () => {

  const blogs = [
    { id: 1, title: "First Blog", author: "Vishwas" },
    { id: 2, title: "Learning React", author: "Vishwas" },
    { id: 3, title: "Why Vite feels faster", author: "Vishwas" }
  ];

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>

      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Written by {blog.author}</p>
        </div>
      ))}

    </div>
  );
};

export default BlogList;
