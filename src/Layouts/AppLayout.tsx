import React from "react";
import { Outlet } from "react-router-dom";

import { StyledAppLayout } from ".";
import { Header, Sidebar } from "@components";

export const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Sidebar className="side_bar_container" />
            <div>
                <Header />
                <Outlet />
            </div>
        </StyledAppLayout>
    );
};
