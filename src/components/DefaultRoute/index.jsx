import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

const DefaultRouter = () => {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
};

export default DefaultRouter;
