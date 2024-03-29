import React from 'react';
import PropTypes from 'prop-types';

import tailwindConfig from '../../tailwind.config';
const themeColors = tailwindConfig.theme.extend.colors;

export const Button = ({ primary = true, secondary, children, size, isDisabled = false, isLoading, loadingText }) => {

  const primaryStyles = 'bg-alternatyve-600 hover:bg-alternatyve-700 text-sm text-center';
  const secondaryStyles = ' focus:ring-4 text-sm text-center border-alternatyve-500 hover:border-alternatyve-300 border-2 bg-white/0 hover:bg-white/10';
  const componentStyles = secondary ? secondaryStyles : primaryStyles;

  const sizes = {
    sm: 'w-28 h-10 px-3 py-2',
    md: 'w-36 h-12 px-5 py-2.5',
    lg: 'w-40 h-12'
  }
  const sizeStyles = sizes[size] || sizes.md

  return (
    <button disabled={isDisabled} className={`flex justify-center font-medium  items-center rounded-full focus:outline-none text-white hover:cursor-pointer hover:scale-105 transition-all ${componentStyles} ${sizeStyles}`}>
      {
        isLoading &&
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle fill={themeColors.primary['50']} cx="4" cy="12" r="1.5">
              <animate attributeName="r" dur="0.75s" values="1.5;3;1.5" repeatCount="indefinite" />
            </circle>
            <circle fill={themeColors.primary['50']} cx="12" cy="12" r="3">
              <animate attributeName="r" dur="0.75s" values="3;1.5;3" repeatCount="indefinite" />
            </circle>
            <circle fill={themeColors.primary['50']} cx="20" cy="12" r="1.5">
              <animate attributeName="r" dur="0.75s" values="1.5;3;1.5" repeatCount="indefinite" />
            </circle>
          </svg>
          <span className='ml-3'>{loadingText || "Cargando"}</span>
        </>
      }
      {
        !isLoading &&
        <>
          {children}
        </>
      }
    </button >
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string
};
