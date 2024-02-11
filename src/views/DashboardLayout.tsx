import { Layout } from "antd";
import { Sidebar } from "../common/Sidebar";
import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import Header from "../common/Header";
import { ReactNode } from "react";

const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Layout>
          <Header />
          <Content className="tw-p-4">
            <div className="tw-h-full tw-bg-white">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
