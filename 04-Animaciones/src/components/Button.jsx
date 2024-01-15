import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary = true, secondary, children }) => {

  const primaryStyles = 'h-12 flex justify-center items-center text-white bg-alternatyve-600 hover:bg-alternatyve-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center';
  const secondaryStyles = 'h-12 flex justify-center items-center text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center border-alternatyve-500 hover:border-alternatyve-300 border-2 bg-white/0 hover:bg-white/10';

  const componentStyles = secondary ? secondaryStyles : primaryStyles;

  return (
    <div className={`w-40 hover:cursor-pointer hover:scale-105 transition-all ${componentStyles}`}>
      {children}
    </div>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
};
