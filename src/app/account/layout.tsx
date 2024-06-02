import React from "react";
import Sidebar from "../../components/atoms/Sidebar/Sidebar";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default AccountLayout;
