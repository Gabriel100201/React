import { useState } from "react";

export const NotifyButton = ({ children, text }) => {
  const [popAvtive, setPopActive] = useState(false);

  // Funciones que activen el texto descriptivo de cada botón
  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleLeave}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`flex items-center justify-center rounded-full  p-2 hover:bg-primary-200`}
      >
        {children}
      </button>
      {popAvtive && (
        <div className="absolute left-1/2 top-16 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200 p-3 py-2">
          <span className="transform font-semibold text-primary-800">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};
