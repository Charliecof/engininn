import React from "react";

type ButtonProps = {
  color:
    | "primary"
    | "danger"
    | "warning"
    | "secondary"
    | "light"
    | "dark"
    | "transparent"
    | "success"
    | "icon";
  isIcon?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ color, isIcon = false, onClick, children }: ButtonProps) => {
  let buttonStyle = "";

  switch (color) {
    case "danger":
      buttonStyle =
        "bg-red-500 hover:bg-red-600 active:border-red-700 border-2 text-white";
      break;
    case "warning":
      buttonStyle =
        "bg-yellow-500 hover:bg-yellow-600 active:border-yellow-700 border-2 text-white";
      break;
    case "secondary":
      buttonStyle =
        "bg-gray-500 hover:bg-gray-600 active:border-gray-700 border-2 text-white";
      break;
    case "light":
      buttonStyle =
        "bg-gray-200 hover:bg-gray-300 active:border-gray-400 border-2 text-gray-800";
      break;
    case "dark":
      buttonStyle =
        "bg-gray-800 hover:bg-gray-900 active:border-black border-2 text-white";
      break;
    case "transparent":
      buttonStyle =
        "bg-transparent hover:bg-gray-200 active:border-gray-300 border-2 text-gray-800";
      break;
    case "success":
      buttonStyle =
        "bg-green-500 hover:bg-green-600 active:border-green-700 border-2 text-white";
      break;
    case "icon":
      buttonStyle =
        "bg-transparent hover:bg-gray-200 active:border-gray-300 border-2 text-gray-800 p-0";
      break;
    default:
      buttonStyle =
        "bg-blue-500 hover:bg-blue-600 active:border-blue-700 border-2 text-white";
      break;
  }

  return (
    <button
      className={`${
        !isIcon ? "px-4 py-2" : "p-px p-py"
      } font-bold w-full flex justify-center  border border-transparent rounded-md ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
