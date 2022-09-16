import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { useBrowser } from "../../hooks/useBrowser";
import { productModel } from "../../model/dummyAPIResponseModel";
import ResultCard from "./ResultCard";

type resultsProps = {
  searchInput: string;
};

function Results({ searchInput }: resultsProps) {
  const { data, isLoading, isError } = useBrowser(searchInput);
  console.log({ data });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <div className="flex flex-col space-y-4 w-full px-8">
      <div>Results:</div>
      {data.total ? (
        <div className="flex flex-col max-h-[480px] divide-y-2 overflow-y-auto">
          <Scrollbars
            style={{
              height: 480,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            }}
          >
            {data.products.map((item: productModel) => (
              <div key={item.id} className="my-4 first:mt-0">
                <ResultCard item={item} />
              </div>
            ))}
          </Scrollbars>
        </div>
      ) : (
        <div className="text-base">
          No results try searching something like phone, plant, motorcycle...
        </div>
      )}
    </div>
  );
}

export default Results;
