import React from "react";
import styled from "styled-components";

import { StyledCard } from "@styles";
import { FlexTable } from "@components";

export const WithdrawalTable = () => {
  return (
    <StyledDepositTable>
      <StyledCard>
        <FlexTable
          head={[
            "Sender address",
            "Recipient address",
            "Cryptocurrency",
            "amount",
            "Fees paid",
            "DateTime",
            "Status",
            "Tx hash",
          ]}
          body={[
            [
              <p>123</p>,
              <p>abc</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
            ],
            [
              <p>123</p>,
              <p>abc</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
            ],
            [
              <p>123</p>,
              <p>abc</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
              <p>asxasx</p>,
              <p>asasxas</p>,
              <p>fghfgh</p>,
            ],
          ]}
        />
      </StyledCard>
    </StyledDepositTable>
  );
};

const StyledDepositTable = styled.div``;
