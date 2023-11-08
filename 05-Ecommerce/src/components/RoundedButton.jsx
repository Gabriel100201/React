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
    console.log("Enter");
    setPopActive(true);
  };
  const handleLeave = () => {
    console.log("Leave");
    setPopActive(false);
  };

  return (
    <div className="relative">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50"
      >
        {children}
      </button>
      {popAvtive && (
        <div className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 p-3 py-2">
          <span className="transform font-semibold text-sky-800">{text}</span>
        </div>
      )}
    </div>
  );
};
