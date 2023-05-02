import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error, Register, Layout } from "./pages";
import { ToastContainer } from "react-toastify";
import {
  Stats,
  Profile,
  AllJobs,
  AddJob,
  DashboardLayout,
} from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            { path: "/", element: <Stats /> },
            { path: "add-job", element: <AddJob /> },
            { path: "all-jobs", element: <AllJobs /> },
            { path: "profile", element: <Profile /> },
          ],
        },
        { path: "register", element: <Register /> },
        { path: "landing", element: <Landing /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      <ToastContainer />
    </>
  );
}

export default App;
