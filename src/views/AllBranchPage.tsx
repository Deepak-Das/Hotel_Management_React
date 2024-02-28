import "../styles/allBranchPage.scss";
import TableComp from "../components/TableComp";
import { useFetchBranchs } from "../hook/useFetchBranchs";

const AllBranchPage = () => {
  const {
    data,
    error,
    isError,
    columns,
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
