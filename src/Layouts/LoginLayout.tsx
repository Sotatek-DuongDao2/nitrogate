import React from "react";
import { Outlet } from "react-router-dom";

import { StyledLoginLayout } from ".";

export const LoginLayout = () => {
  return (
    <StyledLoginLayout>
      <div className="side_backgroung"></div>
      <div className="content">
        <Outlet />
      </div>
    </StyledLoginLayout>
  );
};
