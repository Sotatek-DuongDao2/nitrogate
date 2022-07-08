import React from "react";

import { StyledSidebar } from "./Styles";

interface ISidebar {
    className: string;
}

export const Sidebar = (props: ISidebar) => {
    const { className } = props;
    return (
        <StyledSidebar className={className}>
            <div>
                <img src="../../Images/Logo.png" alt="" />
                Logo
            </div>
            <div>menu content</div>
        </StyledSidebar>
    );
};
