import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { StyledCard, StyledTitleCard } from "@styles";

interface IBasic {
  classname?: string;
}

export const Basic = (props: IBasic) => {
  const { classname } = props;
  return (
    <StyledBasic>
      <StyledCard className={clsx(classname !== undefined && classname)}>
        <StyledTitleCard> Basic Infomation</StyledTitleCard>
        <div className="content">
          <div>
            <label htmlFor="companyPerson">Company Contact Person</label>
            <input type="text" id="companyPerson" name="companyPerson" placeholder="" />
          </div>
          <div>
            <label htmlFor="companyEmail">Company Contact Email</label>
            <input type="text" id="companyEmail" name="companyEmail" placeholder="" />
          </div>
          <div>
            <label htmlFor="companyPhone">Company Contact Phone Number</label>
            <input type="text" id="companyPhone" name="companyPhone" placeholder="" />
          </div>
          <div>
            <label htmlFor="shopUrl">Shop Callback URL</label>
            <input type="text" id="shopUrl" name="shopUrl" placeholder="" />
          </div>
        </div>
      </StyledCard>
    </StyledBasic>
  );
};

const StyledBasic = styled.div`
  .content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;

      input {
        background: #ffffff;

        height: 46px;
        border: 2px solid #d2d5e4;
        border-radius: 8px;
      }
    }
  }
`;
