import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
function NavbarSection() {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={false}
        border
        className="fixed  py-4 top-0 bg-[#03153A] border-0 border-b  border-[#FFD126] left-0  z-50 w-full rtl:justify-end  "
      >
        <Navbar.Brand className=" gap-3">
          <Button
            color={"white"}
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="   rounded-lg md:hidden"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </Button>

          <div className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="logo" />
            <span className="font-mono text-[#FCFCFC] text-2xl">Learning Center</span>
          </div>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Neil Sims</span>
              <span className="block truncate text-sm font-medium">
                neil.sims@flowbite.com
              </span>
            </Dropdown.Header>

            <Dropdown.Item icon={HiOutlineUser}>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiOutlineLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarSection;
