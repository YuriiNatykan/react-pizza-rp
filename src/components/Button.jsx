import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={
        ('button',
        className,
        {
          'button--outline': outline,
        })
      }>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
