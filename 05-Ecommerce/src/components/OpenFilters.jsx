import React from "react";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Filters } from "./Filters";
import { IoFilterSharp } from "react-icons/io5";

export const OpenFilters = () => {
  return (
    <div className="myTheme fixed z-50 sm:hidden w-full">
      < Popover placement="bottom" showArrow={true} >
        <PopoverTrigger>
          <Button
            className="w-full bg-primary-200/80 text-primary-700"
          >
            Filtros
            <IoFilterSharp />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="py-3 w-full">
          <Filters></Filters>
        </PopoverContent>
      </Popover >
    </div >
  );
}