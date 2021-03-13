import React from "react";
import { graphql } from "gatsby";

export default function Films({ data }) {
   
    const films = data.hasura.tnff_films

    // filter film by year
    // gallery with film image and title
    return (
        <div>
            <pre>{ JSON.stringify(data.hasura, null, 2) }</pre>
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

