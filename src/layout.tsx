import React from "react";
import { Outlet } from "react-router";

import { Header } from "./shared/header";
import { AppProvider } from "./contexts/app-context";
import { StyledLayout } from "./styles";

export const Layout: React.FC = () => {
  return (
    <AppProvider>
      <StyledLayout>
        <Header />
        <main>
          <Outlet />
        </main>
      </StyledLayout>
    </AppProvider>
  );
};
