import React from 'react'
import {BiWorld} from 'react-icons/bi'
import {BsCalendar, BsPersonFill }from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import { FaLanguage } from 'react-icons/fa'
import {RiMovieLine} from 'react-icons/ri'


const FilmPage = (props) => {
  const {	title,	synopsis,director_bio,	director,	duration_mins, language,release_date,	location,  director_img_url, 	other_info,	film_img_url,	tnff_year,	category} = props.pageContext.content

	return (
		<div className="wrapper">

			<h1>{title}</h1>
			<hr />
			<div className="film_meta">
				<p><BiWorld/>{location}</p>
				<p><BsCalendar />{tnff_year}</p>
				<p><AiOutlineClockCircle/> {duration_mins} mins</p>
				<p><FaLanguage/> {language}</p>
				<p><RiMovieLine />{ category}</p>
			</div>

			<img src={film_img_url } alt={title } className="film_img"/>

			<div className="film_section">
				<h3>Synopsis</h3>
				<p>{synopsis }</p>
			</div>

			<div className="film_section director">
				<div className="director_img"><img src={ director_img_url} alt={director } /></div>
				<div className="director_data">
					<h3>Director</h3>
					<h4><BsPersonFill />{ director}</h4>
					<p>{director_bio }</p>
				</div>
			</div>

		</div>
	)
};

export default FilmPage;
