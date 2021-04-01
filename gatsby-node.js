exports.createPages = async ({ actions: { createPage }, graphql }) => {
	
	const result = await graphql(
		`
			query  {
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


	const filmTemplate = require.resolve('./src/templates/FilmPage.js')
	result.data.hasura.tnff_films.forEach(film => {
		const newLink = film.title.replace(/ /g,"_");



		// console.log(film.title)
		createPage({
			path: `/films/${newLink}`,
			component: filmTemplate,
			context: {
				title: film.title
			} 
		})
	})
	if (result.errors) {
		console.log('error retrieving data', result.errors)
		return
	}

}

