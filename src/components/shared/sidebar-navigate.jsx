import { useState } from "react";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";

function SidebarNavigate() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <aside
        className={`fixed pt-[65px] top-0 h-full  w-64   left-0 z-40  transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#03153A;] border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="pl-10 pt-12">
          <ul className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#FFD126] " : ""
                    } font-mono text-lg hover:text-[#FFD126] transition-colors text-[#FCFCFC] `
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SidebarNavigate;

//  <Sidebar
//    id="logo-sidebar"
//    className={`fixed top-0 left-0 z-40  transition-transform ${
//      sidebarOpen ? "translate-x-0" : "-translate-x-full"
//    } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
//  >
//    <Sidebar.Items>
//      <Sidebar.ItemGroup>
//        <Sidebar.Item href="#">Dashboard</Sidebar.Item>
//        <Sidebar.Item href="#">Kanban</Sidebar.Item>
//        <Sidebar.Item href="#">Inbox</Sidebar.Item>
//        <Sidebar.Item href="#">Users</Sidebar.Item>
//        <Sidebar.Item href="#">Products</Sidebar.Item>
//        <Sidebar.Item href="#">Sign In</Sidebar.Item>
//        <Sidebar.Item href="#">Sign Up</Sidebar.Item>
//      </Sidebar.ItemGroup>
//    </Sidebar.Items>
//  </Sidebar>;
