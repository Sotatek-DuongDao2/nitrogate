import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { FlexTable } from "@components";
import { StyledCard } from "@styles";

interface IRecentTransfers {
  classname?: string;
}

export const RecentTransfers = (props: IRecentTransfers) => {
  const { classname } = props;
  return (
    <StyledRecentTransfers className={clsx(classname !== undefined && classname)}>
      <StyledCard>
        <FlexTable
          head={["Transfer type", "Cryptocurrency", "Amount", "DateTime", "Tx hash"]}
          body={[
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
          ]}
        />
      </StyledCard>
    </StyledRecentTransfers>
  );
};

const StyledRecentTransfers = styled.div``;
