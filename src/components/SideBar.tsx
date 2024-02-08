import React, { ReactNode, useState } from "react";
import { MdBedroomParent, MdMenu } from "react-icons/md";
import { MenuItem, menuItems } from "./../utils/dummy";
import "./../styles/sidebar.scss";

import logo from "./../../public/assets/images/logo.png";

import favIcon from "./../../public/assets/images/favicon.png";
import { BsArrowDown } from "react-icons/bs";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

// interface menu {
//   icon?: JSX.Element;
//   text: String;
//   active: Boolean;
//   alert: Boolean;
// }

export const SideBar = () => {
  return (
    <>
      <aside className="tw-fixed tw-h-screen tw-flex tw-flex-col tw-justify-between tw-pt-5 tw-bg-[#101924]  tw-text-indigo-400 ">
        <div className="  tw-relative tw-flex tw-justify-center tw-gap-4 tw-mx-5 tw-pb-5 tw-border-b tw-mb-2">
          <img src={logo} alt="Logo" />
          <button>
            <FaRegArrowAltCircleLeft size={30} className="" />
          </button>
        </div>

        <nav className="tw-flex-1 tw-overflow-auto tw-p-4">
          <div className=" ">
            <ul className=" tw-cursor-pointer tw-text-gray-400">
              {menuItems.map((item) => (
                <SidebarItems item={item} />
              ))}
            </ul>
          </div>
        </nav>

        <div className="tw-px-3 tw-mt-4">
          <div className="tw-border-t tw-flex tw-p-3">
            <img src={favIcon} className="tw-w-10 tw-h-10 tw-rounded-md" />
            <div className="tw-flex  tw-justify-between tw-items-center tw-overflow-hidden tw-p-1">
              <div className="tw-leading-4">
                <h2 className="tw-font-semibold">Dashboard</h2>
                <span className="tw-text-gray-500">email@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default function SidebarItems({ item }: { item: MenuItem }) {
  const [expand, setExpand] = useState(false);

  //single child
  if (item.childrens == undefined) {
    return (
      <li>
        <a className="tw-flex tw-text-md tw-gap-2 tw-items-center  hover:tw-bg-gray-800 hover:tw-text-indigo-400">
          {/* <MdBedroomParent size={30} /> */}
          <span>{item.title}</span>
        </a>
      </li>
    );
  }

  //parent with child
  return (
    <>
      <li className={`tw-relative`}
      >
        <div className="tw-flex tw-justify-between tw-items-center "
      onClick={()=>setExpand(!expand)}
        
        >
          <a className={`tw-flex tw-gap-2 tw-items-center ${expand? "tw-text-indigo-400":""} `}>
            {/* <MdBedroomParent size={30} /> */}
            <span>{item.title}</span>
          </a>
          <button 
          
          >
          <FaAngleDown  className={`${expand?"":"tw-rotate-180"} tw-transition tw-ease-out tw-duration-500`} />

          </button>
        </div>
        <ul className={`tw-relative  tw-p-3 tw-pl-7 tw-bg-gray-800  ${expand? "": " tw-hidden "}`}>
          {item.childrens.map((child) => (
            <SidebarItems item={child} />
          ))}
        </ul>
      </li>
    </>
  );
}
