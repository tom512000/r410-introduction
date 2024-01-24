import React from "react";
import PropTypes from "prop-types";

function Card({ title }) {
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: "Title",
};

export default Card;
