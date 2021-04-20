import React, { useState, useCallback, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Loader } from "../components/helpers/Loader";

export default function Films() {
  const [data, setData] = useState([]);
  const [filmFilter, setFilmFilter] = useState("All");
  console.log(data);

  const getData = useCallback(async function () {
    try {
      const data = await fetch(
        "https://sonal-hasura.herokuapp.com/v1/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:
            '{"query":"{\\n tnff_films (order_by: {tnff_year: desc}) {\\n                id\\n                title\\n                tnff_year\\n                location\\n                category\\n                release_date\\n                duration_mins\\n                language\\n                director\\n                producer\\n                synopsis\\n                director_bio\\n                film_img_url\\n                director_img_url\\n                other_info\\n            }\\n}"}',
        }
      );
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

  const handleClick = e => {
    setFilmFilter(e.target.textContent);
  };

  let filmsRender = [];
  data.forEach(film => {
    if (filmFilter === "All") {
      filmsRender.push(film);
    } else {
      if (film.tnff_year === filmFilter && film.film_img_url) {
        filmsRender.push(film);
      }
    }
  });

  // gallery with film image and title
  const filmData = filmsRender.map(film => {
    const { film_img_url, title, id, tnff_year } = film;
    const newLink = title.split(" ").join("-").toLowerCase();
    const newTitle = title.split("(");

    if (film_img_url) {
      return (
        <Link to={`/films/${newLink}`} className="film_single" key={id}>
          <img src={`${film_img_url}`} alt="" />
          <div className="movie_data">
            <h4>{newTitle[0]}</h4>
            <p>{tnff_year}</p>
          </div>
        </Link>
      );
    } else {
      return null;
    }
  });

  const emptyArray =
    filmsRender.length === 0 ? "Sorry, no films for this year." : null;

  const yearsList = data.map(el => {
    return el.tnff_year;
  });

  const years = [...new Set(yearsList)];

  if (data === []) {
    return <Loader />;
  } else {
    return (
      <Layout>
        <div className="filter_year">
          <p>Filter By Year:</p>
          <ul>
            <li onClick={e => handleClick(e)}>All</li>
            {years.map((el, index) => {
              return (
                <li key={index}>
                  <Link
                    to="/films"
                    activeClassName="active"
                    onClick={e => handleClick(e)}
                  >
                    {el}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="films_container">
          {filmData}
          <h4>{emptyArray}</h4>
        </div>
      </Layout>
    );
  }
}
