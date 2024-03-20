import { Outlet, useNavigation } from "react-router-dom";
import * as Component from "../components";

export const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Component.Header />
      <Component.Navbar />
      <div className="align-element py-20">
        {isPageLoading ? <Component.Loading /> : <Outlet />}
      </div>
    </>
  );
};
