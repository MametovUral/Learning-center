import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import ErrorPage from "../pages/error-page";
import Dashboard from "../pages/dashboard";
import AdminTables from "../pages/admin-tables";

import Students from "../pages/students";

import Users from "../pages/users";
import WorkTable from "../pages/work-table";
import Auth from "../pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "admin-tables",
        element: <AdminTables />,
      },
      { path: "students", element: <Students /> },
      {
        path: "users",
        element: <Users />,
      },
      { path: "work-table", element: <WorkTable /> },
    ],
  },

  {
    path: "login",
    element: <Auth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
