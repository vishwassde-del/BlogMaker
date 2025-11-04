import React from "react";

const Nav = () => {
  return (
    <>
    <nav className="navBar">
        <h1>My Blog</h1>
        <div className="navLinks">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav>
    </>
  );
}

export default Nav;