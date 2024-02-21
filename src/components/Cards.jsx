import React from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard";

function Cards({ cardsData }) {
  return (
    <div className="cards">
      {cardsData.map((card) => (
        <FoldableCard key={card.id} title={card.title}>
          {card.content}
        </FoldableCard>
      ))}
    </div>
  );
}

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Cards;
