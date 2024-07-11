import { Outlet } from "react-router-dom";
import SidebarNavigate from "../components/shared/sidebar-navigate";
import NavbarSection from "../components/shared/navbar";

function RootLayout() {
  return (
    <>
      <NavbarSection />
      <SidebarNavigate />

      <main className="flex-1 p-5  md:ml-64">
        <div className="flex pt-16">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;
