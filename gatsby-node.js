exports.createPages = async ({ actions: { createPage }, graphql }) => {
	
	const filmTemplate = require.resolve('./src/templates/FilmPage.js');

	const films = await graphql(
		`
	query getFilm ($film_title: String) 	{
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
	);

	films.data.hasura.tnff_films.forEach(film => {
		const newLink = film.title.split(' ').join('-').toLowerCase();

		createPage({
			path: `/films/${newLink}`,
			component: filmTemplate,
			context: {
				content: film
			}
		});

		return Promise.resolve();
	});
	if (films.errors) {
		console.log('error retrieving data', films.errors);
		return Promise.reject(new Error(films.errors));
	}

}




