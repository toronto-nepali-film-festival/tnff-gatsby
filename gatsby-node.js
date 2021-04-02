exports.createPages = async ({ actions: { createPage }, graphql }) => {
	
	const result = await graphql(
`
	query getFilm ($film_title: String){
		hasura{
		tnff_films(where: {
		title: {_eq: $film_title}	})
			{
				title
				synopsis
				tnff_year
				director_bio
				director
				duration_mins
				language
				release_date
				location
				other_info
				film_img_url
				category
				director_img_url
			}
		}
	}
`
)


	const filmTemplate = require.resolve('./src/templates/FilmPage.js')

	result.data.hasura.tnff_films.forEach(film => {
		const newLink = film.title.split(' ').join('-').toLowerCase()

		createPage({
			path: `/films/${newLink}`,
			component: filmTemplate,
			context: {
				content: film
			} 
		})

        return Promise.resolve()
	})
	if (result.errors) {
		console.log('error retrieving data', result.errors)
			return Promise.reject(new Error(result.errors))
	}

}

