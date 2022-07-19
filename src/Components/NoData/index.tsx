import React from "react";
import styled from "styled-components";

import nodataImg from "../../Images/NoData.png";

export const NoData = () => {
  return (
    <StyledNoData>
      <img src={nodataImg} alt="nodata" />
      <h1>No data</h1>
    </StyledNoData>
  );
};

const StyledNoData = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;

    letter-spacing: -0.015em;

    color: #c4cad8;
  }
`;
