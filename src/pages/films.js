import React, { useState, useCallback, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";
import { Loader } from "../components/helpers/Loader";

export default function Films() {
  const [data, setData] = useState([]);
  const [filmFilter, setFilmFilter] = useState("All");

  const getData = useCallback(async function () {
    try {
      const data = await fetch(
        process.env.GATSBY_HASURA_GRAPHQL_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: "{tnff_films (order_by: {tnff_year: desc}) {\nid\ntitle\ntnff_year\nlocation\ncategory\nrelease_date\nduration_mins\nlanguage\ndirector\nproducer\nsynopsis\ndirector_bio\nfilm_img_url\ndirector_img_url\nother_info\n}}"

          })
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

  const handleOnChange = filterYear => {
    setFilmFilter(filterYear);
  }

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
          <Header headerText="Past Films" />
          <p>Filter By Year:</p>
          <div className="dropdown_mobile">
            <div className="select">
              <select name="tnff_films" id="year" onChange={e => handleOnChange(e.target.value)}>
                {years.map((el, index) => {
                  return (
                    <option
                      value={el}
                      key={index}
                    >
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
}
