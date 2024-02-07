import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Card from "./Card.jsx";
import { useState } from "react";

function FoldableCard({ opened, title, children }) {
  const [isVisible, setOpened] = useState(opened);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Card
      title={title}
      className="foldable"
      onClick={() => setOpened(!isVisible)}
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
