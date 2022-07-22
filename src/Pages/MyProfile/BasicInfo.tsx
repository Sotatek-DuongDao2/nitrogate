import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { StyledCard, StyledTitleCard } from "@styles";
import { InfoCard } from "@components";
import { Person, Mail, Phone, Link } from "@images";

interface IBasicInfo {
  classname?: string;
}

export const BasicInfo = (props: IBasicInfo) => {
  const { classname } = props;
  return (
    <StyledBasicInfo className={clsx(classname !== undefined && classname)}>
      <StyledCard>
        <StyledTitleCard>Basic Infomation</StyledTitleCard>
        <div className="basic_info">
          <InfoCard icon={<Person />} title="Agam Setiawan" content="Company Contact Person" />
          <InfoCard
            icon={<Mail />}
            title="danbaker@nitrogate.com"
            content="Company Contact Email"
          />
          <InfoCard icon={<Phone />} title="0521948124" content="Company Contact Phone Number" />
          <InfoCard icon={<Link />} title="None" content="Shop Callback URL" />
        </div>
      </StyledCard>
    </StyledBasicInfo>
  );
};

const StyledBasicInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  margin-bottom: 19px;

  .basic_info {
    margin-top: 27px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px;
  }
`;
