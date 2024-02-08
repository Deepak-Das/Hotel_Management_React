import { Layout, Flex, Menu } from "antd";
import logo from "./../assets/images/logo-dark.png";
import * as mdIcon from "react-icons/md";
import * as faIcon from "react-icons/fa";
import * as ioIcon from "react-icons/io";
import { antItems } from "../utils/dummy";

import "./../styles/sidebar.scss";
import { BiHome } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "../services/axios";
import { MenuItem, MenuRes, mapMenuResponseToItems } from "../model/menu.model";


const { Sider } = Layout;


export const Sidebar2 = () => {

const [state,setState]=useState<MenuItem[]>()
const [collapsed,setCollapsed]=useState(false)


  useEffect(() => {
    axios.get<MenuRes[]>("/menus/all/main").then((res)=>{
      console.log()
      setState(mapMenuResponseToItems(res.data)
      )
    })

  }, []);
  return (
    <Sider collapsed={collapsed}  className="tw-shadow-md sidebar" theme="light" >
      <div className="tw-flex tw-justify-center tw-gap-4 tw-mx-5 tw-pb-5 tw-border-b tw-mb-2 tw-p-4">
        {!collapsed &&<img src={logo} alt="Logo" />}
        <button onClick={()=>setCollapsed(!collapsed)}>
          {!collapsed ? <faIcon.FaRegArrowAltCircleLeft
            size={30}
            className="tw-text-indigo-400"
          />:<faIcon.FaRegArrowAltCircleRight
          size={30}
          className="tw-text-indigo-400"/>}
        </button>
      </div>

      <Menu
        items={state}
        mode="inline"
        theme="light"
        style={{ fontWeight: 400, fontSize: "1.06rem" }}
      />
    </Sider>
  );
};
