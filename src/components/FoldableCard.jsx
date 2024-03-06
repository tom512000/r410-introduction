import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

function FoldableCard({ title, opened, children, onToggleOpened }) {
  const [isShown, setIsShown] = useState(opened);

  useEffect(() => {
    setIsShown(opened);
  }, [opened]);

  const toggleVisibility = () => {
    setIsShown((prevIsShown) => !prevIsShown);
    onToggleOpened();
  };

  const icon = isShown ? faCircleMinus : faCirclePlus;

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
      {isShown && children}
    </Card>
  );
}

FoldableCard.propTypes = {
  title: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  children: PropTypes.node,
  onToggleOpened: PropTypes.func.isRequired,
};

FoldableCard.defaultProps = {
  opened: false,
  children: null,
};

export default FoldableCard;
