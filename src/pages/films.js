import React, { useState, useCallback, useEffect } from "react";
import {Link} from 'gatsby'
import Layout from '../components/layout'


export default function Films() {

  const [data, setData] = useState([]);
  const [filmFilter, setFilmFilter] = useState("all");
  const [films, setFilms] = useState([]);
  const [searchYear, setSearchYear] = useState('')


  const getData = useCallback(async function () {
    try {
      const data = await fetch("https://sonal-hasura.herokuapp.com/v1/graphql", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": "{\"query\":\"{\\n tnff_films (order_by: {tnff_year: desc}) {\\n                id\\n                title\\n                tnff_year\\n                location\\n                category\\n                release_date\\n                duration_mins\\n                language\\n                director\\n                producer\\n                synopsis\\n                director_bio\\n                film_img_url\\n                director_img_url\\n                other_info\\n            }\\n}\"}"
      });
      const json = await data.json();
      setData(json.data.tnff_films);
  
    } catch (err) {
      setData([]);
      console.log(err);
    }
  }, []);


  useEffect(() => {
    getData();

  }, [getData]);

  // Set filter in state for given input
  const filter = (e) => {
    console.log(e.target.textContent)
    setFilmFilter(e.target.textContent)
  };


// gallery with film image and title
const filmData = data.map(film => {
  const { film_img_url, title, id, tnff_year } = film;
  const newLink = title.split(' ').join('-').toLowerCase()
  const newTitle = title.split('(')
  console.log(newTitle)

if (film_img_url) {
  return (
    <Link to={`/films/${newLink}` } className="film_single" key={id}>
          <img src={`${film_img_url}`} alt="" />
          <div className="movie_data">
              <h3>{newTitle[0]}</h3>
              <p>{ tnff_year}</p>
          </div>
      </Link>
  );
} else {
  return null
}
})
  
const yearsList = data.map((el) => {
return el.tnff_year
})

const years = [...new Set(yearsList)]

return (
<Layout>
    {/* filter film by year */}
    <div  className="filter_year">
      <p>Filter By Year:</p>
            <ul>
      {years.map((el, index) => {
        return (
          <li key={index} value={searchYear} onClick={e=>filter(e)}>{ el}</li>
          )
        })}
        </ul>
    </div>
  <div className="films_container">
  {filmData}
      </div>
  </Layout>
)
}