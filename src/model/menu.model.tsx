import * as mdIcon from "react-icons/md";
import * as faIcon from "react-icons/fa";
import * as ioIcon from "react-icons/io";
import { Key } from "react";


// Define TypeScript interfaces for the data structure
export interface MenuRes {
    menuId: number;
    menuName: string;
    menuType: string;
    menuIcon: string | null;
    menuArea: string;
    children: MenuRes[];
    link: string | null;
    roleId: number;
    EmpId: number;
  }
  
  export interface MenuItem {
    label: string;
    key: Key;
    icon?: JSX.Element;
    children?: MenuItem[]|null;
  }
  
  // Function to map the Axios response to the desired format
  export function mapMenuResponseToItems(response: MenuRes[]): MenuItem[] {
    return response.map(menu => ({
      label: menu.menuName,
      key: menu.link==undefined?menu.menuId:menu.link,
      icon: menu.menuIcon ? <mdIcon.MdOutlineHomeWork /> : undefined,
      children:menu.children?.length==0?undefined:mapMenuResponseToItems(menu.children)
    }));
  }
  
//   // Axios response data
//   const axiosResponse: MenuRes[] = /* Your Axios response here */;
  
//   // Map the Axios response to the desired format
//   const antItems: MenuItem[] = mapMenuResponseToItems(axiosResponse);
  