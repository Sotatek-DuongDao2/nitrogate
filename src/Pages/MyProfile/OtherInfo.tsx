import React from "react";
import clsx from "clsx";

import { StyledCard, StyledTitleCard } from "@styles";
import styled from "styled-components";
import { InfoCard } from "@components";
import { Location, City, Zipcode, Country } from "@images";

interface IOtherInfo {
  classname?: string;
}

export const OtherInfo = (props: IOtherInfo) => {
  const { classname } = props;
  return (
    <StyledOtherInfo className={clsx(classname !== undefined && classname)}>
      <StyledCard>
        <StyledTitleCard>Others</StyledTitleCard>
        <div className="other">
          <InfoCard icon={<Location />} title="123 Street, New York" content="Address 1" />
          <InfoCard icon={<Location />} title="None" content="Address 2" />
          <InfoCard icon={<City />} title="New York" content="City" />
          <InfoCard icon={<Zipcode />} title="10030" content="Zip" />
          <InfoCard icon={<Country />} title="United States" content="Country" />
        </div>
      </StyledCard>
    </StyledOtherInfo>
  );
};
const StyledOtherInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  .other {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
