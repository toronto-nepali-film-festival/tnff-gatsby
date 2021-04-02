import React from "react";
export const years = [
	2020,
	2019,
	2018,
	2017,
	2016
]
const Filter = ({ filter }) => {
  return (
    <div className="films_filter">
      <label htmlFor="filter">Filter By Year</label>
			<select name="filter" id="filter"
			>
				{years.map((el, index) => {
					return (
						<option value={el} key={index}>{ el}</option>
					)
				})}
      </select>
    </div>
  );
};

export default Filter;