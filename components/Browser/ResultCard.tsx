import React from "react";
import { productModel } from "../../model/dummyAPIResponseModel";
import { StarIcon } from "@heroicons/react/24/outline";

type ResultCardProps = {
  item: productModel;
};

function ResultCard({ item }: ResultCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-3 flex flex-col space-y-4 relative">
      <div>
        {item.brand} - {item.title}
      </div>
      <div className="absolute top-1 right-5">
        <img className="w-42 h-52" src={item.thumbnail} />
      </div>
      <div className="text-sm w-3/4">{item.description}</div>

      {item.stock && (
        <div className="text-base font-semibold">
          In stock <span className="text-green-600">{item.stock}+</span>
        </div>
      )}
      {item.price && (
        <div className="text-base font-semibold">Price ${item.price}</div>
      )}

      <div className="flex space-x-3">
        {item.images.map((image: string, i: number) => (
          <div key={i}>
            <img src={image} className="w-20 h-20" />
          </div>
        ))}
      </div>

      <div className="flex space-x-2 items-center">
        {item.rating && (
          <div>
            <div className="text-base px-4 flex  border-2 border-amber-700 rounded-xl items-center justify-center py-1 text-amber-500">
              <StarIcon className="h-4 w-4 mr-1" />
              {item.rating} / 5
            </div>
          </div>
        )}
        {item.category && (
          <div>
            <div className="text-base px-4 flex capitalize border-2 border-sky-700 rounded-xl items-center justify-center py-1 text-sky-500">
              {item.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultCard;
