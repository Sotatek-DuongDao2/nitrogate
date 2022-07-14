import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PnlChart } from "./PnlChart";
import { AggregatedBalances } from "./AggregatedBalances";
import { ProfileInfomation } from "@components";
import { RecentTransfers } from "./RecentTransfers";

export const DashBoard = () => {
  const navigate = useNavigate();
  console.log(localStorage.getItem("accessToken"));

  //if don't have accesToken, push to login page
  useLayoutEffect(() => {
    if (localStorage.getItem("accessToken") === "") {
      navigate("/login");
    }
    return;
  }, []);
  return (
    <StyledHome>
      <ProfileInfomation classname="profile_container" />
      <AggregatedBalances />
      <RecentTransfers classname="recent_transfers_container" />
      <PnlChart />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  .profile_container,
  .recent_transfers_container {
    width: 60%;
  }
`;
