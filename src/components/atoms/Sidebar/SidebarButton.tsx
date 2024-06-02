import React, { JSXElementConstructor } from "react";

interface SidebarButtonProps {
  title: string;
  path: string;
  collapsed?: boolean;
  Icon: JSXElementConstructor<any>;
}

const SidebarButton = ({
  title,
  path,
  Icon,
  collapsed = false,
}: SidebarButtonProps) => {
  return (
    <li>
      <a
        href={path}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <Icon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        {!collapsed && <span className="ms-3 text-xs">{title}</span>}
      </a>
    </li>
  );
};

export default SidebarButton;
