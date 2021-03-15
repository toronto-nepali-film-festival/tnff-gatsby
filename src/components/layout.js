import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link to="/">
                    <h3>Toronto Nepali Film Festival</h3>
                </Link>
                <ul>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
            <footer>
                <p>© TNFF | Toronto Nepali Film Festival</p>
            </footer>
        </div>
    )
}