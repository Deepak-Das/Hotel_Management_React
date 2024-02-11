import { Layout, Menu } from "antd";
import logo from "./../assets/images/logo-dark.png";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./../styles/sidebar.scss";

import { CSSProperties, useEffect, useState } from "react";
import axios from "../services/axios";
import { MenuItem, MenuRes, mapMenuResponseToItems } from "../model/menu.model";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { toggle } from "../state/slice-creater/sideMenu";
import {
  Navigate,
  Router,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

const { Sider } = Layout;

const sidebar: CSSProperties = {
  width: "100%",
};

export const Sidebar = () => {
  const [state, setState] = useState<MenuItem[]>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sideMenu.collapse);

  useEffect(() => {
    axios.get<MenuRes[]>("/menus/all/main").then((res) => {
      console.log();
      setState(mapMenuResponseToItems(res.data));
    });
  }, [state]);

  return (
    <Sider
      collapsed={collapsed}
      style={sidebar}
      className="tw-border-r- tw-h-screen tw-overflow-auto tw-border-r-[1px] tw-shadow-lg"
      theme="light"
      width={220}
    >
      <div className="tw-mx-5 tw-mb-2 tw-flex tw-justify-center tw-gap-4 tw-border-b tw-p-4 tw-pb-5">
        {!collapsed && <img src={logo} alt="Logo" />}
        <button onClick={() => dispatch(toggle())}>
          {!collapsed ? (
            <MenuFoldOutlined className="tw-text-2xl tw-text-indigo-400" />
          ) : (
            <MenuUnfoldOutlined className="tw-text-2xl tw-text-indigo-400" />
          )}
        </button>
      </div>

      <Menu
        items={state}
        mode="inline"
        theme="light"
        onClick={(info) => {
          navigate(info.key);
        }}
        // style={{
        //   fontWeight: 500,
        //   fontSize: "1.06rem",
        //   overflow: "auto",
        // }}
      />
    </Sider>
  );
};
