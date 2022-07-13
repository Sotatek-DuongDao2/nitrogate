import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import QRCode from "qrcode.react";

import "antd/dist/antd.min.css";

import { StyledCard } from "@styles";
import { Copy } from "@images";

export const DepositAction = () => {
  const { Option } = Select;
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
        <h4>Select chain</h4>
        <Select defaultValue="all" className="select_chain">
          <Option value="all">all</Option>
          <Option value="1515">1515</Option>
          <Option value="1516">1516</Option>
        </Select>
        <hr />
        <div className="qrcode_container">
          <QRCode value="https://reactjs.org/" renderAs="canvas" />
          <div>
            <p>Scan the QR Code or copy the address below to deposit.</p>
            <h4>Wallet address</h4>
            <div>
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
  .select_chain {
    width: 100%;
  }
  svg {
    cursor: pointer;
  }
  .qrcode_container {
    display: flex;
    h3 {
      background: #e9edf3;

      border: 2px solid #d2d5e4;
      border-radius: 8px;
    }
  }
`;
