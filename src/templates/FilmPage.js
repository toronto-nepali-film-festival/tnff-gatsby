import React, { Fragment } from "react";


const FilmPage = (props) => {
  const { title, synopsis } = props.pageContext.content

	return (
		<Fragment>

      <h1>{title}</h1>
      <p>{synopsis }</p>
		</Fragment>
	)
};

export default FilmPage;
