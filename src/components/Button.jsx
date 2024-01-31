import React from "react";
import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: "",
  onClick: null,
};

export default Button;
