import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import React from "react";
// eslint-disable-next-line import/extensions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons/faCircleMinus";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
// eslint-disable-next-line import/extensions
import Card from "./Card.jsx";
// eslint-disable-next-line import/extensions
import useShowable from "../hooks/useShowable.js";

function FoldableCard({ opened, title, children }) {
  const { isShown, toggleShown, extendedClassName } = useShowable(
    opened,
    "foldable ",
  );

  const icon = isShown ? faCircleMinus : faCirclePlus;

  return (
    <Card
      title={
        <>
          {title}
          <FontAwesomeIcon icon={icon} />
        </>
      }
      className={extendedClassName}
      onClick={toggleShown}
    >
      {isShown && children}
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
