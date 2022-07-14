import React, { useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { Select } from "antd";
import "antd/dist/antd.min.css";

import { StyledCard, StyledTitleCard } from "@styles";
import { Copy } from "@images";

interface IProfileInfo {
  classname?: string;
}

export const ProfileInfo = (props: IProfileInfo) => {
  const { classname } = props;
  const { Option } = Select;

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
    <StyledProfileInfo>
      <StyledCard className={clsx(classname !== undefined && classname)}>
        <StyledTitleCard>Profile Infomation</StyledTitleCard>
        <div className="content">
          <div>
            <label htmlFor="shopId">Shop Identifier</label>
            <div id="shopId" className="id_shop">
              <h3>20a606efdeeb33c92b08af250386b0a8</h3> <Copy onClick={copy} />
            </div>
          </div>
          <div>
            <label htmlFor="shopAlias">Shop Identifier Alias</label>
            <input type="text" id="shopAlias" name="shopAlias" placeholder="" />
          </div>
          <div>
            <label htmlFor="shopName">Shop Name</label>
            <input type="text" id="shopName" name="shopName" placeholder="" />
          </div>
          <div>
            <label htmlFor="shopTimeZone">Shop TimeZone</label>
            <Select id="shopTimeZone" placeholder="" className="select_timezone">
              <Option value="[GMT +8:00] Beijing, Perth, Singapore">
                [GMT +8:00] Beijing, Perth, Singapore
              </Option>
              <Option value="123">123</Option>
              <Option value="457">457</Option>
            </Select>
          </div>
        </div>
      </StyledCard>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  .content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;

      input,
      .id_shop {
        background: #ffffff;

        height: 46px;
        border: 2px solid #d2d5e4;
        border-radius: 8px;
      }

      .id_shop {
        cursor: pointer;
        display: flex;
        justify-content: space-between;

        background: #e9edf3;
      }
      .select_timezone {
        .ant-select-selector {
          border: 2px solid #d2d5e4;
          border-radius: 8px;
          height: 46px;
        }
      }
    }
  }
`;
