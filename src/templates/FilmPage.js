import React from 'react'
import Layout from '../components/layout'
import {BiWorld} from 'react-icons/bi'
import {BsCalendar, BsPersonFill }from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import { FaLanguage } from 'react-icons/fa'
import {RiMovieLine} from 'react-icons/ri'


const FilmPage = (props) => {
	const { title, synopsis, director_bio, director, duration_mins, language, location, director_img_url, other_info, film_img_url, tnff_year, category } = props.pageContext.content;

	const other = () => {
		if (other_info) {
			return (
				<div className="film_section">
					<h4>Other Info:</h4>
					<p>{ other_info}</p>
				</div>
			)
		} else {
			return null
		}
	}

	const director_photo = () => {
		if (director_img_url) {
			return (
				<div className="director_img">
					<img src={director_img_url} alt={director} />
				</div>
			)
		} else {
			return null
		}
	}

	return (
		<Layout>

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
					{director_photo()}
				
				<div className={!director_img_url ? null : `director_data`} >
					<h3>Director</h3>
					<h4><BsPersonFill />{ director}</h4>
					<p>{director_bio }</p>
				</div>
			</div>

			{other}
		</Layout>
	)
};

export default FilmPage;
