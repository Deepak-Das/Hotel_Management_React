import { useQuery } from "@tanstack/react-query";
import { getAllBranch } from "../services/branch.service";
import { useSearchParams } from "react-router-dom";

interface Props {
  PageNo: string;
  PageSize: string;
  Sort: "ACS" | "DESC";
}

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
  return { ...query, currentPageNo, currentPageSize, Sort, setSearchParams };
};
