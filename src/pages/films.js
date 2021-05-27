import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Films({
  data: {
    hasura: { tnff_films },
  },
}) {
  const [filmFilter, setFilmFilter] = useState("All");

  const handleClick = e => {
    setFilmFilter(e.target.textContent);
  };

  const handleOnChange = filterYear => {
    setFilmFilter(filterYear);
  };

  let filmsRender = [];
  tnff_films.forEach(film => {
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
          <img
            src={`${film_img_url}`}
            alt={`${title} movie poster`}
            loading="lazy"
          />
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
    filmsRender.length === 0 ? "Sorry we are still working on updating our catalogue for this year, check back again soon!" : null;

  const yearsList = tnff_films.map(el => {
    return el.tnff_year;
  });

  const years = [...new Set(yearsList)];

  return (
    <Layout>
      <div className="filter_year">
        <Header headerText="Past Films" />
        <p>Filter By Year:</p>
        <div className="dropdown_mobile">
          <div className="select">
            <select
              name="tnff_films"
              id="year"
              onChange={e => handleOnChange(e.target.value)}
            >
              {years.map((el, index) => {
                return (
                  <option value={el} key={index}>
                    {el}
                  </option>
                );
              })}
              ;
            </select>
          </div>
        </div>

        <div className="filter_desktop">
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
      </div>
      <div className="films_container">
        {filmData}
        <h4>{emptyArray}</h4>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query allFilmsQuery {
    hasura {
      tnff_films(order_by: { tnff_year: desc }) {
        category
        director
        film_img_url
        location
        language
        id
        other_info
        producer
        release_date
        synopsis
        title
        tnff_year
        director_bio
        director_img_url
        duration_mins
      }
    }
  }
`;
