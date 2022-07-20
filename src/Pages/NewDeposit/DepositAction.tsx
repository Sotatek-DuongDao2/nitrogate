import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import QRCode from "qrcode.react";

import "antd/dist/antd.min.css";

import { StyledCard } from "@styles";
import { Copy } from "@images";

export const DepositAction = () => {
  const { Option } = Select;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState<string>("TYuH18RT2rxRFtf...vErhePX8MSizH");

  // const inputHandler = (event: any) => {
  //   setText(event.target.value);
  // };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return (
    <StyledDepositAction>
      <StyledCard>
        <h3>Select chain</h3>

        <div className="select_chain">
          <Select defaultValue="all">
            <Option value="all">All</Option>
            <Option value="1515">1515</Option>
            <Option value="1516">1516</Option>
          </Select>
        </div>

        <hr />

        <div className="qrcode_container">
          <QRCode value="https://reactjs.org/" renderAs="canvas" />
          <div>
            <p>Scan the QR Code or copy the address below to deposit.</p>
            <h4>Wallet address</h4>
            <div className="qrcode_copy">
              <h3>TYuH18RT2rxRFtf...vErhePX8MSizH</h3>
              <Copy onClick={copy} />
            </div>
          </div>
        </div>
      </StyledCard>
    </StyledDepositAction>
  );
};

const StyledDepositAction = styled.div`
  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #626674;
  }

  .select_chain {
    .ant-select {
      display: flex;
    }
    .ant-select-selector {
      height: 46px;
      width: 100%;
      border: 2px solid #d2d5e4;
      border-radius: 8px;
      background-color: transparent;
    }

    .ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active,
    .ant-select-open .ant-select-selector {
      border-color: #d2d5e4 !important;
      box-shadow: none !important;
    }

    .ant-select-selector:hover {
      border-color: #d2d5e4 !important;
      box-shadow: none !important;
    }

    .ant-select-selection-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  hr {
    border: 0;
    border-bottom: 1px solid #e9edf3;

    margin-top: 20px;
    margin-bottom: 30px;
  }

  svg {
    cursor: pointer;
  }

  .qrcode_container {
    display: flex;
    gap: 25px;

    p,
    h3,
    h4 {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.2px;

      margin: 0;
    }
    p {
      width: 60%;
      font-weight: 400;

      color: #626674;
    }
    h4 {
      color: #1d263a;
    }
    h3 {
      color: #1d263a;
    }

    .qrcode_copy {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 12px 20px;

      background: #e9edf3;

      border: 2px solid #d2d5e4;
      border-radius: 8px;
    }
  }
`;
