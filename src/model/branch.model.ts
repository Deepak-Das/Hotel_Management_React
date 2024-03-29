// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface BranchModel {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  branchId: number;
  branchCode: string;
  branchName: string;
  branchAddress: string;
  contactNo: string;
  emailId: string;
  landlineNo: string;
  alternateMobile1: string;
  alternateMobile2: string;
  supportEmail: string;
  isActive: boolean;
  createdBy: number;
  createdDate: string;
  updatedDate: string;
  hotelTypeID: any[];
  branchEmployeeMaps: any[];
  description: string|null;
  action:null
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
