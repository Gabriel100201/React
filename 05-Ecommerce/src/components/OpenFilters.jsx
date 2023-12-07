import React from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { Filters } from "./Filters";
import { IoFilterSharp } from "react-icons/io5";

export const OpenFilters = () => {
  return (
    <div className="fixed z-50 w-full myTheme sm:hidden">
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Button className="w-full bg-primary-200/80 text-primary-700">
            Filtros
            <IoFilterSharp />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full py-3">
          <Filters></Filters>
        </PopoverContent>
      </Popover>
    </div>
  );
};
