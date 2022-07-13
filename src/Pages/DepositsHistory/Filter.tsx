import React from "react";
import styled from "styled-components";
import { Select, DatePicker } from "antd";
import "antd/dist/antd.min.css";

export const Filter = () => {
  const { Option } = Select;
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };
  return (
    <StyledFilter>
      <div>
        <DatePicker onChange={onChange} />
      </div>
      <p>-</p>
      <div>
        <DatePicker onChange={onChange} />
      </div>
      <div>
        <Select defaultValue={"Pending"}>
          <Option value="Pending">Pending</Option>
          <Option value="Successful">Successful</Option>
          <Option value="Failed">Failed</Option>
        </Select>
      </div>
      <div>
        <Select defaultValue={"USDT_TRC20"}>
          <Option value="USDT_TRC20">USDT_TRC20</Option>
          <Option value="USDT_ERC20">USDT_ERC20</Option>
          <Option value="USDC_ERC20">USDC_ERC20</Option>
          <Option value="US2">US2</Option>
        </Select>
      </div>
      <button>Filter</button>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;
