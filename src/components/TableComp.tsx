import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import "../styles/allBranchPage.scss";
import { useState } from "react";
import { BranchModel } from "../model/branch.model";
import { Pagination, PaginationProps } from "antd";
import { SetURLSearchParams } from "react-router-dom";
import Loading from "../common/Loding";
import Error from "../common/Error";

interface Props {
  isLoading: Boolean;
  isError: Boolean;
  data: BranchModel | any;
  columns: any;
  errorMsg: string | undefined;
  totalElements: number;
  pageNo: number;
  size: number;
  setPageParms: SetURLSearchParams;
}

const TableComp = ({
  isLoading,
  isError,
  data,
  columns,
  errorMsg,
  totalElements,
  pageNo,
  size,
  setPageParms,
}: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current = pageNo,
    pageSize = size,
  ) => {
    // console.log(current, pageSize);
    setPageParms({
      PageSize: pageSize.toString(),
      Sort: "ACS",
    });
  };

  const onPageChange: PaginationProps["onShowSizeChange"] = (
    page = pageNo,
    pageSize = size,
  ) => {
    console.log(page, pageSize);
    page = page - 1;
    setPageParms({
      PageNo: page.toString(),
      PageSize: pageSize.toString(),
      Sort: "ACS",
    });
  };

  const table = useReactTable({
    data: data?.content ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  if (isLoading) {
    return (
      <Loading/>
    );
  } else if (isError) {
    return (
      <Error errorMsg={errorMsg}/>
    );
  }

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-white">
      <div className="   tw-p-4">
        <div className=" tw-h-full tw-overflow-x-auto tw-rounded-t-lg tw-border ">
          <table className="rtl:tw-text-right">
            <thead className="tw-uppercase">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  className="tw-bg-indigo-400
                "
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      className=" tw-px-6 tw-py-3 tw-text-sm tw-font-normal tw-text-white"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, i) => (
                <tr
                  className={`tw-cursor-pointer tw-border-b tw-text-sm 
                tw-text-textColor hover:tw-bg-indigo-50`}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <td className={` tw-px-6 tw-py-3`} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      </div>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={pageNo}
        total={totalElements}
        defaultPageSize={size}
        onChange={onPageChange}
      />
    </div>
  );
};

export default TableComp;
