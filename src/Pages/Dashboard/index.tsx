import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const DashBoard = () => {
  const navigate = useNavigate();
  console.log(localStorage.getItem("accessToken"));

  //if don't have accesToken, push to login page
  useLayoutEffect(() => {
    if (localStorage.getItem("accessToken") === "") {
      navigate("/login");
    }
  }, []);
  return <StyledHome>HOME</StyledHome>;
};

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .intro {
    font-size: 25px;
    color: #2a2550;
  }
`;
