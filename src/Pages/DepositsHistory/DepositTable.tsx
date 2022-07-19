import React from "react";
import styled from "styled-components";

import { StyledCard } from "@styles";
import { FlexTable } from "@components";

export const DepositTable = () => {
  return (
    <StyledDepositTable>
      <StyledCard>
        <FlexTable
          head={[
            "Sender Address",
            "Recipient Address",
            "Client ID",
            "Cryptocurrency",
            "Amount",
            "Fee Charges",
            "Amount after fees",
            "Timestamp",
            "Tx hash",
          ]}
          body={[
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
            [
              <p>Baker style address</p>,
              <p>Baker style address</p>,
              <p>123</p>,
              <p>USDT_TRC20</p>,
              <p>123.456</p>,
              <p>345.678</p>,
              <p>345.678</p>,
              <p>12/10/2022</p>,
              <p>123b123b132n1231v23123132</p>,
            ],
          ]}
        />
      </StyledCard>
    </StyledDepositTable>
  );
};

const StyledDepositTable = styled.div`
  > div {
    overflow-x: auto;
  }
`;
