import React from "react";
// import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from "gatsby";

const ListLink = props => (
<li>
<Link to={props.to}>{props.children}</Link>
</li>
)

export default function Layout({ children }) {
  return (
    <div className="layout wrapper">
      <header>
        <Link to="/">
            <h3>Toronto Nepali Film Festival</h3>
        </Link>
        <ul>
            <ListLink  to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/films">Archive</ListLink>
        </ul>
      </header>
      {children}
      <footer>
        <p>© TNFF | Toronto Nepali Film Festival</p>
      </footer>
    </div>
    )
}