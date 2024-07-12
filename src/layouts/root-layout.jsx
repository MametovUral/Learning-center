import { Navigate, Outlet } from "react-router-dom";
import SidebarNavigate from "../components/shared/sidebar-navigate";
import NavbarSection from "../components/shared/navbar";
import { Toaster } from "sonner";

import { getItem } from "../helpers/persistance-store";

function RootLayout() {
  const loggedIn = getItem("token");
  return (
    <>
      <NavbarSection />
      <SidebarNavigate />
      <main className="flex-1 p-5  md:ml-64">
        <div className="flex pt-16">
          {/* {loggedIn ? <Outlet /> : <Navigate to={"login"} />} */}
          {<Outlet />}
        </div>
      </main>
      <Toaster position="top-right" />
    </>
  );
}

export default RootLayout;
