import React from "react";
import { graphql } from "gatsby";

export default function Authors({ data }) {
    return(
        <div>
            <pre>{ JSON.stringify(data.hasura, null, ) }</pre>
        </div>
    )
}


export const query = graphql`
  query AuthorQuery{
    hasura {
      author {
        id
        name
      }
    }
  }
`