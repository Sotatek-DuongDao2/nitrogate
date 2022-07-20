import React from "react";
import styled from "styled-components";

import { Aggregated } from "@components";
import { DepositAction } from "./DepositAction";
import { StyledTitlePage } from "@styles";
import Us2Img from "../../Images/Us2Coint.png";
import ErcImg from "../../Images/ErcCoin.png";

const ar = [
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <img src={ErcImg} alt="erc" />,
    name: "USDT-TRC20",
    value: 230123123,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-TRC20",
    value: 230123123,
  },
];

export const NewDeposit = () => {
  return (
    <StyledNewDeposit>
      <StyledTitlePage>New deposit</StyledTitlePage>
      <div className="new_deposit_container">
        <div>
          <Aggregated
            title="Aggregated Balances"
            items={ar}
            viewmore={false}
            classname="new_deposit"
          />
        </div>
        <div>
          <DepositAction />
        </div>
      </div>
    </StyledNewDeposit>
  );
};

const StyledNewDeposit = styled.div`
  .new_deposit_container {
    display: flex;
    gap: 24px;
    > div {
      flex: 1;
    }
  }
`;
