import React from "react";
import PropTypes from "prop-types";

function Button({ children, className }) {
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: "",
};

export default Button;
