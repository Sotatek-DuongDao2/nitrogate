import { ILayout } from "@interfaces";
import React from "react";

import { StyledAppLayout } from ".";

export const AppLayout = (props: ILayout) => {
    const { children } = props;
    return <StyledAppLayout>{children}</StyledAppLayout>;
};
