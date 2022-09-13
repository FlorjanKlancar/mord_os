import React from "react";

type DropdownMenuProps = {
  selectedNumber: number;
  setAlbumId: (selectedNumber: number) => void;
};

function DropdownMenu({ selectedNumber, setAlbumId }: DropdownMenuProps) {
  const arrayOfAlbums = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          onChange={(e: any) => setAlbumId(e.target.value)}
        >
          {arrayOfAlbums.map((number: number) => (
            <option value={number} key={number} defaultValue={selectedNumber}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropdownMenu;
