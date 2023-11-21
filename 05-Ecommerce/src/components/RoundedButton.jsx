import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export const RoundedButton = ({ children, text }) => {
  const [popAvtive, setPopActive] = useState(false);

  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };

  return (
    <div className="relative">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="flex items-center justify-center rounded-full bg-primary-50 p-2 hover:bg-primary-200"
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
