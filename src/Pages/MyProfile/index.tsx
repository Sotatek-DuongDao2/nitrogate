import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ProfileInfomation } from "@components";
import { BasicInfo } from "./BasicInfo";
import { OtherInfo } from "./OtherInfo";
import { StyledTitlePage } from "@styles";

export const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <StyledMyProfile>
      <div>
        <StyledTitlePage>MyProfile</StyledTitlePage>
        <button onClick={() => navigate("/profile/update")} className="btn_update">
          Update Shop Info
        </button>
      </div>

      <div className="profile_content">
        <div>
          <ProfileInfomation />
        </div>
        <div className="grid_other_info">
          <OtherInfo />
        </div>
        <div className="grid_basic_info">
          <BasicInfo />
        </div>
      </div>
    </StyledMyProfile>
  );
};

const StyledMyProfile = styled.div`
  > div:first-child {
    display: flex;
    justify-content: space-between;
  }
  .profile_content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;

    .grid_basic_info {
    }

    .grid_other_info {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
  .btn_update {
    width: 155px;
    height: 36px;
    cursor: pointer;

    background: #193b68;
    border-radius: 8px;

    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #ffffff;
  }
`;
