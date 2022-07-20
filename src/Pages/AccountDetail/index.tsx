import React from "react";
import styled from "styled-components";

import { Aggregated } from "@components";
import Us2Img from "../../Images/Us2Coint.png";
import ErcImg from "../../Images/ErcCoin.png";

const ar = [
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-TRC20",
    value: 123,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "USDT-ERC20",
    value: 111,
  },
  {
    icon: <img src={ErcImg} alt="erc" />,
    name: "USDT-ERC20",
    value: 8686,
  },
  {
    icon: <img src={Us2Img} alt="us2" />,
    name: "US2",
    value: 8888,
  },
];
import { StyledTitlePage } from "@styles";

export const AccountDetail = () => {
  return (
    <StyledAccountDetail>
      <StyledTitlePage>Account balances</StyledTitlePage>
      <div className="account_detail">
        <Aggregated title="Aggregated Balances" items={ar} viewmore={false} />
      </div>
    </StyledAccountDetail>
  );
};

const StyledAccountDetail = styled.div`
  width: 49%;
  height: 530px;

  .account_detail {
    height: 100%;
  }
`;
