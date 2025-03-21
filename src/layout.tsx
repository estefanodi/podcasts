import React from "react";
import { Outlet } from "react-router";
import { Header } from "./shared/header";

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
