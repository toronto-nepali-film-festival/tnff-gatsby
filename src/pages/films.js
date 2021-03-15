import React, {Fragment} from "react";
import { graphql } from "gatsby";


export default function Films({ data }) {
   
    const films = data.hasura.tnff_films
    // filter film by year
    // gallery with film image and title
    const filmData = films.map(film => {
        const { film_img_url, title, id, release_date } = film;
        if (film_img_url) {
            return (
                <div className="film_single" key={id}>
                    <img src={`${film_img_url}`} alt="" />
                    <h2>{title}</h2>
                </div>
            );
        } else {
            return null
        }
    })
    return (
        <div className="films_container">
            {/* <pre>{ JSON.stringify(data.hasura, null, 2) }</pre> */}
            {filmData}
        </div>
    )
}

export const query = graphql`
    query FilmQuery{
        hasura {
            tnff_films {
                id
                title
                tnff_year
                location
                category
                release_date
                duration_mins
                language
                director
                producer
                synopsis
                director_bio
                film_img_url
                director_img_url
                other_info
            }
        }
    }
`

