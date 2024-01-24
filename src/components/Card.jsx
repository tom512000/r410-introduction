import React from "react";

function Card({ title }) {
  return (
    <article className="card">
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <header className="card__header header__title">{title}</header>
      <section className="card__main">Content</section>
    </article>
  );
}

export default Card;
