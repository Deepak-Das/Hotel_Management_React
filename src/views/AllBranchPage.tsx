import { useQuery } from "@tanstack/react-query";
import { getAllBranch } from "../services/branch.service";
import Spinner from "../common/Spinner";
import notFoundImg from "../assets/images/not_found.jpg";
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Content } from "../model/branch.model";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import "../styles/allBranchPage.scss";
import { useState } from "react";
import { LuArrowDown, LuArrowUp, LuArrowUpDown } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const AllBranchPage = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnHelper = createColumnHelper<Content>();

  let [searchParams, setSearchParams] = useSearchParams({
    PageNo: "0",
    PageSize: "2",
  });

  let pageNo = searchParams.get("PageNo") || "0";
  let pageSize = searchParams.get("PageSize") || "2";

  const { isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["getBranchs", pageNo, pageSize],
    queryFn: () => getAllBranch(parseInt(pageNo), parseInt(pageSize)),
  });

  const columns = [
    columnHelper.accessor((row) => row.branchId, {
      id: "bracchId",
      header: ({ column }) => {
        return (
          <button
            className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-uppercase"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Branch_Id
            <span>
              {column.getIsSorted() === "asc" ? <LuArrowDown /> : <LuArrowUp />}
            </span>
          </button>
        );
      },
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branchCode", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branchName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branchAddress", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("contactNo", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("alternateMobile1", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("action", {
      cell: (info) => {
        const getObjHandler = () => {
          let obj = info.row.original;
          console.log(obj);
        };

        return (
          <div className="tw-flex tw-gap-2 ">
            <BiEdit className="tw-text-2xl tw-transition-all tw-duration-100  tw-ease-out hover:tw-scale-150 hover:tw-text-secondaryColor" />
            <MdDeleteOutline
              onClick={getObjHandler}
              className="tw-text-2xl tw-transition-all tw-duration-100 tw-ease-out hover:tw-scale-150 hover:tw-text-red-600"
            />
          </div>
        );
      },
    }),
  ];

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
      <div className="tw-m-auto tw-grid tw-h-full tw-w-1/2 tw-content-center ">
        <Spinner text={"Please Wait..."}></Spinner>
      </div>
    );
  } else if (isError) {
    return (
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center ">
        <img src={notFoundImg} className="tw-w-1/3" />
        <h2 className="tw-text-2xl tw-font-medium tw-text-textColor">
          Someting went wrong...
          <hr />
        </h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-bg-white  tw-p-4">
      <div className=" tw-h-96 tw-overflow-auto tw-rounded-t-lg tw-border ">
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
  );
};

export default AllBranchPage;
