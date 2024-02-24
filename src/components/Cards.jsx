import React, { useState } from "react";
import PropTypes from "prop-types";
import FoldableCard from "./FoldableCard";

function Cards({ cardsData }) {
  const [openedId, setOpenedId] = useState(null);

  const handleToggleOpened = (id) => {
    setOpenedId(id);
  };

  return (
    <div className="cards">
      {cardsData.map((card) => (
        <FoldableCard
          key={card.id}
          title={card.title}
          opened={openedId === card.id}
          onToggleOpened={() => handleToggleOpened(card.id)}
        >
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
