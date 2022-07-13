import React from "react";
import styled from "styled-components";

import { Aggregated } from "@components";
import { DepositAction } from "./DepositAction";
import { StyledTitlePage } from "@styles";

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

export const NewDeposit = () => {
  return (
    <StyledNewDeposit>
      <StyledTitlePage>New deposit</StyledTitlePage>
      <div className="new_deposit_container">
        <Aggregated
          title="Aggregated Balances"
          items={ar}
          viewmore={false}
          classname="new_deposit"
        />
        <DepositAction />
      </div>
    </StyledNewDeposit>
  );
};

const StyledNewDeposit = styled.div`
  .new_deposit_container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
