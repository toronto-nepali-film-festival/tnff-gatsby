import React, { Fragment } from "react";
import { graphql } from "gatsby";
import {MDXRenderer} from 'gatsby-plugin-mdx'

export const query = graphql`
query ($film_title: String) {
  hasura {
    tnff_films(where: {title: {_eq: $film_title}}) {
      title
      synopsis
      director
      director_bio
      tnff_year
    }
  }
}
`;

const FilmPage = ({ data }) => {

	// 	const film = data.hasura.tnff_films
	// console.log(film)
	return (
		<Fragment>

			<h1>this is film page</h1>
		</Fragment>
	)
};

export default FilmPage;


