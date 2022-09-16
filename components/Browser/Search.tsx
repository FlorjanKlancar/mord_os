import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

type SearchProps = {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  submitHandler: (e: any) => void;
  setQueryInput: (searchInput: string) => void;
};

function Search({
  searchInput,
  setSearchInput,
  submitHandler,
  setQueryInput,
}: SearchProps) {
  return (
    <form className="w-1/3" onSubmit={submitHandler}>
      <div className="h-12 flex justify-between items-center border-2 rounded-full px-4">
        <div className="p-4">
          <MagnifyingGlassIcon className="h-6 w-6 hover:text-slate-400 cursor-pointer " />
        </div>

        <input
          className="py-0.5 text-slate-200 leading-tight focus:outline-none w-11/12 bg-slate-900 "
          id="search"
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div>
          <XMarkIcon
            className="h-6 w-6 hover:text-slate-400 cursor-pointer "
            onClick={() => {
              setSearchInput("");
              setQueryInput("");
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
