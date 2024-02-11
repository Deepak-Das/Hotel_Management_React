import * as mdIcon from "react-icons/md";
import * as faIcon from "react-icons/fa";
import * as ioIcon from "react-icons/io";
import { Key } from "react";
import { icons } from "antd/es/image/PreviewGroup";
import { IconType } from "react-icons";
import Icons from "../common/Icons";

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

const Icon = mdIcon["MdOutlineHomeWork"];

// Function to map the Axios response to the desired format
export function mapMenuResponseToItems(response: MenuRes[]): MenuItem[] {
  return response.map((menu) => ({
    label: menu.menuName,
    key: menu.link == undefined ? menu.menuId : menu.link,
    icon: menu.menuIcon ? (
      <div>
        <Icons name={menu.menuIcon as keyof IconType} />
      </div>
    ) : undefined,
    // icon:
    //   menu.menuIcon != undefined ? (
    //     <i
    //       className={`bx ${menu.menuIcon} bx-sm bx-tada-hover`}
    //       style={{ color: "#6d706e" }}
    //     ></i>
    //   ) : undefined,
    children:
      menu.children?.length == 0
        ? undefined
        : mapMenuResponseToItems(menu.children),
  }));
}
