import { Outlet } from "react-router-dom";
import * as Component from "../components";

export const HomeLayout = () => {
  return (
    <>
      <Component.Header />
      <Component.Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};
