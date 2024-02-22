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
  return <RouterProvider router={routers} />;
}

export default App;
