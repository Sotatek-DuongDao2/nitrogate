import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { StyledCard, StyledTitleCard } from "@styles";

interface IOther {
  classname?: string;
}

export const Other = (props: IOther) => {
  const { classname } = props;

  return (
    <StyledOther>
      <StyledCard className={clsx(classname !== undefined && classname)}>
        <StyledTitleCard>Others</StyledTitleCard>
        <div className="other_content">
          <div>
            <label htmlFor="address">Address 2</label>
            <input type="text" id="address" name="address" placeholder="" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" placeholder="" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip</label>
            <input type="text" id="zipCode" name="zipCode" placeholder="" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" placeholder="" />
          </div>
        </div>
      </StyledCard>
    </StyledOther>
  );
};

const StyledOther = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  .other_content {
    > div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        background: #ffffff;

        height: 46px;
        border: 2px solid #d2d5e4;
        border-radius: 8px;
      }
    }
  }
`;
