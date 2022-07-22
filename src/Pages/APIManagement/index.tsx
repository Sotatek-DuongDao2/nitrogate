import React, { useState } from "react";
import styled from "styled-components";

import { StyledCard, StyledTitlePage } from "@styles";
import { Copy } from "@images";

export const APIManagement = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState<string>("20a606efdeeb33c92b08af250386b0a8");

  // const inputHandler = (event: any) => {
  //   setText(event.target.value);
  // };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };
  return (
    <StyledAPIManagement>
      <StyledTitlePage>API Management</StyledTitlePage>

      <StyledCard className="api_body">
        <p>API Key</p>
        <div className="api_content">
          <h4>20a606efdeeb33c92b08af250386b0a8</h4>
          <Copy onClick={copy} />
        </div>
      </StyledCard>
    </StyledAPIManagement>
  );
};

const StyledAPIManagement = styled.div`
  width: 40%;

  .api_body {
    width: 100%;

    p {
      margin-bottom: 5px;

      font-weight: 600;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #626674;
    }
  }

  .api_content {
    padding: 0 20px;
    margin-bottom: 300px;
    height: 46px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #e9edf3;

    border: 2px solid #d2d5e4;
    border-radius: 8px;

    svg {
      cursor: pointer;
    }

    h4 {
      margin: 0;

      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.2px;

      color: #1d263a;
    }
  }
`;
