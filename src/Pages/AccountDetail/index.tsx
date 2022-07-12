import React from "react";
import styled from "styled-components";

import { AggregatedBalances } from "../Dashboard/AggregatedBalances";
import { StyledTitlePage } from "@styles";

export const AccountDetail = () => {
  return (
    <StyledAccountDetail>
      <StyledTitlePage>Account balances</StyledTitlePage>
      <AggregatedBalances classname="account_details" />
    </StyledAccountDetail>
  );
};

const StyledAccountDetail = styled.div`
  .account_details {
    width: 60%;
  }
`;
