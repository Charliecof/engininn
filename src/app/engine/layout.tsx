import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-gray-900 text-4xl font-bold">New Room</h1>
      </div>
      <div className="w-full max-w-xl px-4">{children}</div>
    </div>
  );
}

export default Layout;
