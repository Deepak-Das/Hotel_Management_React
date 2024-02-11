import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./views/DashboardLayout";
import NotFoundPage from "./views/NotFoundPage";
import TableComp from "./components/TableComp";
import AllBranchPage from "./views/AllBranchPage";
import { ConfigProvider } from "antd";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "overview",
        element: <div>Overview</div>,
      },
      {
        path: "all-branch",
        element: <AllBranchPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorText: "#5e84a5",
            fontSize: 18,
          
          },
        },
      }}
    >
      <RouterProvider router={routers} />
    </ConfigProvider>
  );
}

export default App;
