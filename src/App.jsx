import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error, Dashboard, Register, Layout } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "landing", element: <Landing /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" theme="dark" />
    </>
  );
}

export default App;
