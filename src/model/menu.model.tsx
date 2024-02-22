import { Key } from "react";
import { IconType } from "react-icons";
import DynamicIcon from "../common/DynamicIcon";

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
  children?: MenuItem[] | null;
}


// Function to map the Axios response to the desired format
export function mapMenuResponseToItems(response: MenuRes[]): MenuItem[] {
  return response.map((menu) => ({
    label: menu.menuName,
    key: menu.link == undefined ? menu.menuId : menu.link,
    icon: menu.menuIcon ? (
      <div>
        <DynamicIcon name={menu.menuIcon as keyof IconType} />
      </div>
    ) : undefined,
    children:
      menu.children?.length == 0
        ? undefined
        : mapMenuResponseToItems(menu.children),
  }));
}
