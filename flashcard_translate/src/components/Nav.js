import React from "react";
import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul id="link2favor">
          <Link to="/">Home</Link>
        </ul>
        <ul id="link2favor">
          <Link to="/About">About</Link>
        </ul>
        <ul id="link2favor">
          <CustomLink to="/Translate">Translate</CustomLink>
        </ul>
        <ul id="link2favor">
          <Link to="/Flashcard">Flashcard</Link>
        </ul>
        <ul id="link2favor">
          <Link to="/Joke">Joke</Link>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
