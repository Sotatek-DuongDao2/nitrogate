import React from "react";

import { StyledTitlePage, StyledCard } from "@styles";
import { FlexTable } from "@components";

export const DepositsHistory = () => {
  return (
    <div>
      <StyledTitlePage>DepositsHistory</StyledTitlePage>
      <div className="filter-container">
        <div>datepiker</div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <StyledCard>
        <FlexTable
          head={["Sender address", "Recipient address", "cryptocurrency", "amount", "Tx hash"]}
          body={[
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
            [<p>123</p>, <p>abc</p>, <p>asxasx</p>, <p>asasxas</p>, <p>fghfgh</p>],
          ]}
        />
      </StyledCard>
    </div>
  );
};
