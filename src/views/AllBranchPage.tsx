
import {

  createColumnHelper,

} from "@tanstack/react-table";
import { Content } from "../model/branch.model";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import "../styles/allBranchPage.scss";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import TableComp from "../components/TableComp";
import { useFetchBranchs } from "../hook/useFetchBranchs";

const AllBranchPage = () => {
  const columnHelper = createColumnHelper<Content>();

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

  const {
    data,
    error,
    isError,
    isLoading,
    currentPageNo,
    currentPageSize,
    setSearchParams,
  } = useFetchBranchs({ PageNo: "0", PageSize: "10", Sort: "ACS" });

  return (
    <TableComp
      columns={columns}
      data={data}
      errorMsg={error?.message}
      isError={isError}
      isLoading={isLoading}
      totalElements={data?.totalElements || 0}
      pageNo={parseInt(currentPageNo) + 1 || 1}
      size={parseInt(currentPageSize) || 10}
      setPageParms={setSearchParams}
    />
  );

};

export default AllBranchPage;
