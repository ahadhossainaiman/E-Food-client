import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBer/NavBer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname === "/login" || location.pathname.includes("signup");
  console.log(noHeaderFooter);
  return (
    <div>
      {noHeaderFooter || <NavBer></NavBer>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
