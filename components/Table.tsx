import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { fileModel } from "../model/fileModel";
import Link from "next/link";

interface TableProps {
  tableHeaders: any;
  data: any;
}

function Table({ data: ReactTableData, tableHeaders }: TableProps) {
  const data = useMemo(
    () =>
      ReactTableData.map((item: fileModel) => ({
        col1: item.fileName,
        col2: item.createdAt,
        col3: item.updatedAt,
        col4: item.size,
      })),
    [ReactTableData]
  );

  const columns = useMemo(() => tableHeaders, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="w-full h-full overflow-x-auto xl:overflow-hidden text-xl xl:text-3xl">
      <table className="table w-full text-center" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                >
                  <div className="flex flex-row justify-center items-center mx-5">
                    {column.render("Header")}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownIcon className="ml-3 h-5 w-5" />
                      ) : (
                        <ArrowUpIcon className="ml-3 h-5 w-5" />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Link href={`/files/${row.values.col1.split(".")[0]}`} key={i}>
                <tr
                  className="hover:bg-slate-500 cursor-pointer"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
