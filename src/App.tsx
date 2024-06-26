import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Pages from "./pages";
import { ErrorElement } from "./components";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.HomeLayout />,
    errorElement: <Pages.Error />,
    children: [
      {
        index: true,
        element: <Pages.Landing />,
        errorElement: <ErrorElement />,
        loader: Pages.landingLoader,
      },
      {
        path: "products",
        element: <Pages.Products />,
        errorElement: <ErrorElement />,
        loader: Pages.productsLoader,
      },
      {
        path: "products/:id",
        element: <Pages.SingleProduct />,
        errorElement: <ErrorElement />,
        loader: Pages.singleProductLoader,
      },
      {
        path: "cart",
        element: <Pages.Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <Pages.About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "orders",
        element: <Pages.Orders />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Pages.Checkout />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Pages.Login />,
    errorElement: <Pages.Error />,
    action: Pages.loginAction(store),
  },
  {
    path: "/register",
    element: <Pages.Register />,
    errorElement: <Pages.Error />,
    action: Pages.registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
