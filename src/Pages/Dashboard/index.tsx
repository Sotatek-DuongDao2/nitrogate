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
      <div className="grid_profile">
        <ProfileInfomation />
      </div>
      <div className="grid_aggregate_balance">
        <AggregatedBalances />
      </div>
      <div className="grid_recent_transfers">
        <RecentTransfers />
      </div>
      <div className="grid_pnlchart">
        <PnlChart />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 31%;
  grid-template-rows: auto auto auto auto;
  /* flex-wrap: wrap;
  justify-content: center; */
  gap: 24px;
  .grid_profile {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .grid_aggregate_balance {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .grid_recent_transfers {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 5;
  }
  .grid_pnlchart {
    grid-row-start: 3;
    grid-row-end: 5;
  }
`;
