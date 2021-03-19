exports.allfilms = async () => {
	  const data = await fetch("https://sonal-hasura.herokuapp.com/v1/graphql", {
            "method": "POST",
            "headers": {
            "Content-Type": "application/json"
            },
                "body": "{\"query\":\"{\\n tnff_films {\\n                id\\n                title\\n                tnff_year\\n                location\\n                category\\n                release_date\\n                duration_mins\\n                language\\n                director\\n                producer\\n                synopsis\\n                director_bio\\n                film_img_url\\n                director_img_url\\n                other_info\\n            }\\n}\"}"
		})
	console.log(data.json())
	const json = await data.json()
	console.log(json.data.tnff_films)
	return  json.data.tnff_films
}