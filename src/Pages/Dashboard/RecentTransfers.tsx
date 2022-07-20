import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import {
  FlexTable,
  // NoData
} from "@components";
import { StyledCard, StyledTitleCard } from "@styles";

interface IRecentTransfers {
  classname?: string;
}

export const RecentTransfers = (props: IRecentTransfers) => {
  const { classname } = props;
  return (
    <StyledRecentTransfers className={clsx(classname !== undefined && classname)}>
      <StyledCard>
        <StyledTitleCard className="recent_transfer_title">Recent Transfers</StyledTitleCard>
        <FlexTable
          head={["Transfer type", "Cryptocurrency", "Amount", "DateTime", "Tx hash"]}
          body={[
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
          ]}
          // noData={<NoData />}
        />
      </StyledCard>
    </StyledRecentTransfers>
  );
};

const StyledRecentTransfers = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .recent_transfer_title {
    margin-bottom: 17px;
  }
`;
