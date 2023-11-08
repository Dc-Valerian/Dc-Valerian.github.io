import Footer from "../blocks/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
