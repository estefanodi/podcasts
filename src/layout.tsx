import React from "react";
import { Outlet } from "react-router";

import { Header } from "./shared/header";
import { StyledLayout } from "./styles";
import { useAppContext } from "./contexts/app-context";

export const Layout: React.FC = () => {
  const { isFetchPodcastsLoading, isFetchEpisodesLoading } = useAppContext();

  return (
    <StyledLayout>
      <Header isLoading={isFetchPodcastsLoading || isFetchEpisodesLoading} />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};
