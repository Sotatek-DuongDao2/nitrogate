import React from "react";
import styled from "styled-components";

import { Aggregated } from "@components";

const ar = [
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <div></div>,
    name: "USDT-TRC20",
    value: 230123123,
  },
];
import { StyledTitlePage } from "@styles";

export const AccountDetail = () => {
  return (
    <StyledAccountDetail>
      <StyledTitlePage>Account balances</StyledTitlePage>
      <Aggregated
        title="Aggregated Balances"
        items={ar}
        viewmore={false}
        classname="account_detail"
      />
    </StyledAccountDetail>
  );
};

const StyledAccountDetail = styled.div`
  .account_detail {
    width: 60%;
  }
`;
