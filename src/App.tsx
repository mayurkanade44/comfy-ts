import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Pages from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.HomeLayout />,
    children: [
      {
        index: true,
        element: <Pages.Landing />,
      },
      {
        path: "products",
        element: <Pages.Products />,
      },
      {
        path: "products/:id",
        element: <Pages.SingleProduct />,
      },
      {
        path: "cart",
        element: <Pages.Cart />,
      },
      {
        path: "about",
        element: <Pages.About />,
      },
      {
        path: "orders",
        element: <Pages.Orders />,
      },
      {
        path: "checkout",
        element: <Pages.Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Pages.Login />,
  },
  {
    path: "/register",
    element: <Pages.Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
