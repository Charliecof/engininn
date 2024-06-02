"use client";
import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import IconDashboard from "mdi-react/ViewDashboardIcon";
import IconProfile from "mdi-react/AccountIcon";
import IconLogout from "mdi-react/LogoutIcon";
import IconMenu from "mdi-react/MenuIcon";
import Button from "../Button";
import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Sidebar mobile button */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 ${
          isSidebarOpen ? "w-52" : "w-14"
        }  ease-in duration-75  h-screen transition-transform -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between">
            {isSidebarOpen && (
              <a
                href="https://flowbite.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center ps-2.5 mb-5"
              >
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  width={24}
                  height={24}
                  className="h-6 me-3 sm:h-7"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  EnginInn
                </span>
              </a>
            )}
            <div className="w-6">
              <Button
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                isIcon
                color="icon"
              >
                <IconMenu />
              </Button>
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            <SidebarButton
              Icon={IconDashboard}
              path="#"
              title="Dashboard"
              collapsed={!isSidebarOpen}
            />
            <SidebarButton
              Icon={IconProfile}
              path="#"
              title="Profile"
              collapsed={!isSidebarOpen}
            />
            <SidebarButton
              Icon={IconLogout}
              path="#"
              title="Logout"
              collapsed={!isSidebarOpen}
            />
          </ul>
        </div>
      </aside>

      <div className={`${isSidebarOpen ? "sm:ml-52" : "sm:ml-14"} p-2`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
