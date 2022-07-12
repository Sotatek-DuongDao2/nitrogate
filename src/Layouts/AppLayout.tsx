import React from "react";
import { Outlet } from "react-router-dom";

import { StyledAppLayout } from ".";
import { Header, Sidebar } from "@components";

export const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Sidebar className="side_bar_container" />
      <div className="header_and_content">
        <Header />
        <div className="app_content">
          <Outlet />
        </div>
      </div>
    </StyledAppLayout>
  );
};
