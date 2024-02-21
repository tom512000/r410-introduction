import React from "react";
import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  function buttonClick(e) {
    e.stopPropagation();
    if (onClick != null) {
      onClick();
    }
  }

  return (
    <button className={className} type="button" onClick={buttonClick}>
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
