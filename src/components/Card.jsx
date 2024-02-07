import React from "react";
import PropTypes from "prop-types";

function Card({ title, children, className, onClick }) {
  const combinedClassName = `card ${className}`;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <article className={combinedClassName} onClick={onClick}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  children: "",
  className: "",
  onClick: null,
};

export default Card;
