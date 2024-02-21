import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Button from "./Button.jsx";

function Counter({ before, after, className, onChange, initial }) {
  const [cpt, setCpt] = useState(initial);

  const incrementCounter = () => {
    setCpt(cpt + 1);
  };

  useEffect(() => {
    if (onChange !== null) {
      onChange(cpt);
    }
  }, [cpt]);

  return (
    <Button className={className} type="button" onClick={incrementCounter}>
      {before}
      {cpt}
      {after}
    </Button>
  );
}

Counter.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  initial: PropTypes.number,
};

Counter.defaultProps = {
  before: null,
  after: null,
  className: "",
  onChange: null,
  initial: 0,
};

export default Counter;
