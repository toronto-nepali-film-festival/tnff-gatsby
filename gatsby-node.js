exports.createPages = async ({ actions: { createPage }, graphql }) => {
	
	const result = await graphql(
		`
			query MyQuery {
				hasura {
					tnff_films {
						id
						title
						synopsis
					}
				}
		}
		`
	)

	console.log(result.data)

	if (result.errors) {
		console.log('error retrieving data', result.errors)
		return
	}

	const filmTemplate = require.resolve('./src/templates/FilmPage.js')

	result.data.hasura.tnff_films.forEach(film => {
		createPage({
			path: `/films/${film.title}/`,
			component: filmTemplate,
			context: {
				title: film.title
			} 
		})
	})
}
