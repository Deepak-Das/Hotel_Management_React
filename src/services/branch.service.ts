import { BranchModel } from "../model/branch.model";
import axios from "./axios";

export const getAllBranch = async (
  PageNo: number = 0,
  pageSize: number = 10,
  sort: "ACS" | "DESC" | string,
) => {
  const branches = await axios.get<BranchModel>(
    `/branches?PageNo=${PageNo}&&PageSize=${pageSize}&&Sort=${sort}`,
  );
  console.log(branches.data);
  return branches.data;
};
