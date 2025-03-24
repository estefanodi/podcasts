import React from "react";
import { Outlet } from "react-router";

import { Header } from "./shared/header";
import { StyledLayout } from "./styles";
import { useAppContext } from "./contexts/app-context";

export const Layout: React.FC = () => {
  const { isLoading } = useAppContext();

  return (
    <StyledLayout>
      <Header isLoading={isLoading} />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};
