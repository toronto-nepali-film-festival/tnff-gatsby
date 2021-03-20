import React, { Fragment, useState, useCallback, useEffect } from "react";
import Layout from '../components/layout'


export default function Films({ }) {

  const [data, setData] = useState([]);
  const [filmFilter, setFilmFilter] = useState("all");
  const [films, setFilms] = useState([]);
  const [searchYear, setSearchYear] = useState('')


  // ! breakdown tasks/lil sprints for timeline

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


  // let filmsToRender = [];
  // data.forEach((film) => {
  //   if (filmFilter === "all") {
  //     filmsToRender.push(film);
  //     // console.log(film)
  //     //   filmsToRender.push(film);
  //   } else {
  //     // console.log(data)
  //     data.forEach(film => {
  //       console.log(film)
        // if (film.tnff_year === filmFilter) {
      //     console.log(filmFilter)
      //   console.log(film);
      //   // filmsToRender.push(film)
      //   }
//       });
//     }
//   })
// console.log(filmsToRender)
// console.log(data)

// gallery with film image and title
const filmData = data.map(film => {
const { film_img_url, title, id, release_date } = film;
if (film_img_url) {
  return (
      <div className="film_single" key={id}>
          <img src={`${film_img_url}`} alt="" />
          <div className="movie_data">
              <h2>{title}</h2>
              <p>{ release_date}</p>
          </div>
      </div>
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
<div className="wrapper">
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
</div>
)
}