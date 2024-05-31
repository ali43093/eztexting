import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { BlueLink } from "../Buttons";

function SearchBox({placeholder}: {placeholder: string}) {
  return (
      <div className="flex flex-col relative flex-grow">
        <Search className="absolute top-1/2 left-4 -translate-y-1/2 h-5 w-5 text-[#5a7088]" />
        <BlueLink className="absolute top-1/2 right-2 hover:bg-transparent -translate-y-1/2">Advanced Search</BlueLink>
        <Input
          placeholder={placeholder}
          className="pl-10 bg-[#f3f5f9] rounded-[32px] h-12 focus-visible:ring-0 focus-visible:ring-offset-0" // Add some padding to accommodate the icon
        />
      </div>
  );
}

export default SearchBox;
