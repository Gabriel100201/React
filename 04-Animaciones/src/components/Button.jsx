import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary, secondary, children }) => {

  const primaryStyles = 'text-white bg-alternatyve-600 hover:bg-alternatyve-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2';
  const secondaryStyles = 'bg-secondary text-black border-secondary';

  const componentStyles = secondary ? secondaryStyles : primaryStyles;

  return (
    <div className={`w-44 ${componentStyles}`}>
      {children}
    </div>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
};
