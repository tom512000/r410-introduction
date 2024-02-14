import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import React, { useState } from "react";
// eslint-disable-next-line import/extensions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons/faCircleMinus";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
// eslint-disable-next-line import/extensions
import Card from "./Card.jsx";

function FoldableCard({ opened, title, children }) {
  const [isVisible, setOpened] = useState(opened);
  const [icon, setIcon] = useState(isVisible ? faCircleMinus : faCirclePlus);

  const toggleVisibility = () => {
    setOpened(!isVisible);
    setIcon(isVisible ? faCirclePlus : faCircleMinus);
  };

  return (
    <Card
      title={
        <>
          {title}
          <FontAwesomeIcon icon={icon} />
        </>
      }
      className="foldable"
      onClick={toggleVisibility}
    >
      {isVisible && children}
    </Card>
  );
}

FoldableCard.propTypes = {
  opened: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

FoldableCard.defaultProps = {
  opened: false,
  title: "",
  children: null,
};

export default FoldableCard;
