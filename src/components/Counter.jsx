import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter({ before, after, className }) {
  const [cpt, setCpt] = useState(0);

  const incrementCounter = () => {
    setCpt(cpt + 1);
  };

  return (
    <button className={className} type="button" onClick={incrementCounter}>
      {before}
      {cpt}
      {after}
    </button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
};

export default Counter;
