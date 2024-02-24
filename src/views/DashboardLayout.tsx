import { Layout } from "antd";
import { Sidebar } from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";


const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <>
      <Layout hasSider>
        <Sidebar></Sidebar>
        <Layout>
          <Header />
          <Content className="tw-h-full tw-overflow-y-auto tw-p-4">
            <div className="">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
