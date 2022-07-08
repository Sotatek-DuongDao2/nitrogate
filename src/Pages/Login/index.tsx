import React from "react";
import styled from "styled-components";

export const Login = () => {
    return (
        <StyledLogin>
            <p className="intro">Login</p>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
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
