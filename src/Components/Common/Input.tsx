import React from "react";

type Props = {
    test?: string;
};

export const Input = (props: Props) => {
    return <div>{props.test}</div>;
};
