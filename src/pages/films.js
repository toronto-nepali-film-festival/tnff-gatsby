import React, { Fragment, useState, useCallback, useEffect } from "react";
import Filter from '../components/helpers/Filter'
// import {allfilms} from '../components/helpers/allfilms'


export default function Films({}) {
    const [data, setData] = useState([])
    const [filmFilter, setFilmFilter] = useState("all")
    const [films, setFilms] = useState([])


    // ! breakdown tasks/lil sprints for timeline

    const getData = useCallback(async function () {
        try {
            const data = await fetch("https://sonal-hasura.herokuapp.com/v1/graphql", {
            "method": "POST",
            "headers": {
            "Content-Type": "application/json"
            },
                "body": "{\"query\":\"{\\n tnff_films {\\n                id\\n                title\\n                tnff_year\\n                location\\n                category\\n                release_date\\n                duration_mins\\n                language\\n                director\\n                producer\\n                synopsis\\n                director_bio\\n                film_img_url\\n                director_img_url\\n                other_info\\n            }\\n}\"}"
            })
            const json = await data.json()
            setData(json.data.tnff_films)
            
        } catch (err) {
            setData([])
            console.log(err)
        }
    }, [])

  
  useEffect(() => {
    getData()

  }, [getData])

      // Set filter in state for given input
  const filter = (e) => {
    // setFilmFilter(e.target.value);
      console.log(e.target.value)
  };
   
    // const hasura_films = data.hasura.tnff_films

//       let filmsToRender = [];
//   hasura_films.forEach((film) => {
//       if (filmFilter === "all") {
//         // console.log(film)
//       filmsToRender.push(film);
//       } else {
//           hasura_films.forEach(film => {
//               if (film.release_date === filmFilter) {
//                   console.log(film)
//               }
//           })
    //   film.platforms.forEach((film) => {
    //     if (film[0] === filmFilter) {
    //       filmsToRender.push(film);
    //     }
    //   });
    // }
//   });
    // console.log(filmsToRender)
    console.log(data)

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
    return (
        <div className="wrapper">
             {/* filter film by year */}
            <Filter />
            <div className="films_container">
            
            {filmData}
            </div>
        </div>
    )
}