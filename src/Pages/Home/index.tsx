import React from "react";
import styled from "styled-components";

export const Home = () => {
    return <StyledHome>HOME</StyledHome>;
};

const StyledHome = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .intro {
        font-size: 25px;
        color: #2a2550;
    }
`;
