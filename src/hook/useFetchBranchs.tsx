import { useQuery } from "@tanstack/react-query";
import { getAllBranch } from "../services/branch.service";
import { useSearchParams } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";
import { Content } from "../model/branch.model";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

interface Props {
  PageNo: string;
  PageSize: string;
  Sort: "ACS" | "DESC";
}

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

export const useFetchBranchs = ({ PageNo, PageSize, Sort }: Props) => {
  let [searchParams, setSearchParams] = useSearchParams({
    PageNo: PageNo,
    PageSize: PageSize,
    Sort: Sort,
  });
  let currentPageNo = searchParams.get("PageNo") || "0";
  let currentPageSize = searchParams.get("PageSize") || "10";
  const query = useQuery({
    queryKey: ["getBranchs", currentPageNo, currentPageSize, Sort],
    queryFn: () =>
      getAllBranch(parseInt(currentPageNo), parseInt(currentPageSize), Sort),
  });

  // Sort = searchParams.get("Sort") || "DESC";
  return { columns,...query, currentPageNo, currentPageSize, Sort, setSearchParams };
};
