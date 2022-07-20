import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Select, DatePicker, Popover } from "antd";
import moment from "moment";

import "antd/dist/antd.min.css";

import { Search, ArrowDownGray, Line, LineHorizontal } from "@images";
import { StyledButton } from "@styles";

export const Filter = () => {
  const { Option } = Select;
  const [isVisiblePopover, setIsVisiblePopover] = useState<boolean>(false);
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  const disableDate = (current: any) => {
    const customDate = moment().format("YYYY-MM-DD");
    return current && current < moment(customDate, "YYYY-MM-DD");
  };

  return (
    <StyledFilter>
      <div className="filter_search">
        <label htmlFor="">Search</label>
        <div>
          <Popover
            content={
              <>
                <div onClick={() => setIsVisiblePopover(false)}>
                  <h3>Sender Address</h3>
                </div>
                <div onClick={() => setIsVisiblePopover(false)}>
                  <h3>Recipient</h3>
                </div>
                <div onClick={() => setIsVisiblePopover(false)}>
                  <h3>Tx Hash</h3>
                </div>
              </>
            }
            // trigger="click"
            placement="bottom"
            className="popover_container"
            visible={isVisiblePopover}
          >
            <GlobalStyle />
            <div className="filter_search_select" onClick={() => setIsVisiblePopover(true)}>
              <Search />
              <ArrowDownGray />
            </div>
          </Popover>

          <Line />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="filter_date">
        <label htmlFor="date">Date</label>
        <div>
          <div>
            <DatePicker
              onChange={onChange}
              disabledDate={(current) => disableDate(current)}
              placeholder="Start Time"
              id="date"
            />
          </div>
          <LineHorizontal className="line_horizontal" />
          <div>
            <DatePicker
              onChange={onChange}
              disabledDate={(current) => disableDate(current)}
              placeholder="End Time"
              id="date"
            />
          </div>
        </div>
      </div>

      <div className="filter_select">
        <label htmlFor="status">Status</label>
        <div>
          <Select defaultValue={"Pending"} id="status">
            <Option value="USDT_TRC20">Pending</Option>
            <Option value="USDT_ERC20">Successful</Option>
            <Option value="USDC_ERC20">Failed</Option>
          </Select>
        </div>
      </div>

      <div className="filter_select">
        <label htmlFor="cryptocurrency">Cryptocurrency</label>
        <div>
          <Select defaultValue={"USDT_TRC20"} id="cryptocurrency">
            <Option value="USDT_TRC20">USDT_TRC20</Option>
            <Option value="USDT_ERC20">USDT_ERC20</Option>
            <Option value="USDC_ERC20">USDC_ERC20</Option>
            <Option value="US2">US2</Option>
          </Select>
        </div>
      </div>
      <StyledButton>
        <button>Filter</button>
      </StyledButton>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;

  > div:last-child {
    display: flex;
    gap: 20px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #626674;
  }

  .filter_search {
    > div {
      display: flex;
      gap: 12px;
      align-items: center;

      height: 46px;
      padding: 0 22px;
      border: 2px solid #d2d5e4;
      border-radius: 8px;

      .filter_search_select {
        cursor: pointer;
        display: flex;
        gap: 15px;
        align-items: center;
      }

      input {
        border: 0px;
        background-color: transparent;
      }

      textarea:focus,
      input:focus {
        outline: none;
      }
    }
  }

  .filter_date {
    > div {
      display: flex;
      align-items: center;

      cursor: pointer;

      .line_horizontal {
        margin: 0 5px;
      }

      .ant-picker {
        border: 2px solid #d2d5e4;
        border-radius: 8px;
        height: 46px;
        background-color: transparent;
      }

      .ant-picker-focused,
      .ant-picker:hover {
        border: 2px solid #d2d5e4;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }

  .filter_select {
    .ant-select-selector {
      height: 46px;
      width: 164px;
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

  button {
    width: 86px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    .ant-popover-inner {
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      .ant-popover-inner-content {
        padding: 0;
      }

      .ant-popover-inner-content > div {
        height: 46px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .ant-popover-inner-content > div:hover {
        background: #F3F5F6;
        h3 {
          color: #1E87F0;
        }
      }

      h3 {
        padding: 0 16px;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;

        letter-spacing: -0.2px;

        color: #1D263A;
      }
    }
    .ant-popover-arrow {
      display: none;
    }
  }
`;
