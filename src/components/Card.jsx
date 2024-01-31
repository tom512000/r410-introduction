import React from "react";
import PropTypes from "prop-types";

function Card({ title, children }) {
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
};

Card.defaultProps = {
  children: "Content",
};

export default Card;
