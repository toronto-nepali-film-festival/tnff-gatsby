import React from "react";
import { Link } from "gatsby";

export default function ImageBanner(props) {
    return <div className="image_banner">
        <img src={props.imageUrl} />
        <Link to={`/films/`} className="banner_button">
           {props.imageText} 
        </Link>
    </div>
}