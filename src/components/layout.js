import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem`}}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
                    <h3 style={{ display: `inline` }}>Toronto Nepali Film Festival</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
            <footer style={{ marginBottom: `1.5rem`, color: 'grey' }}>
                <p>© TNFF | Toronto Nepali Film Festival</p>
            </footer>
        </div>
    )
}