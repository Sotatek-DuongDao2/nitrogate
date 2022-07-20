import React from "react";
import styled from "styled-components";

import { StyledTitlePage } from "@styles";
import { ProfileInfo } from "./ProfileInfo";
import { Basic } from "./Basic";
import { Other } from "./Other";

export const UpdateProfile = () => {
  return (
    <StyledUpdateProfile>
      <div>
        <StyledTitlePage>My Profile</StyledTitlePage>
        <button>Discard changes</button>
        <button>Save changes</button>
      </div>
      <div className="update_profile_content">
        <div className="grid_profile_info">
          <ProfileInfo />
        </div>
        <div className="grid_other">
          <Other />
        </div>
        <div className="grid_basic">
          <Basic />
        </div>
      </div>
    </StyledUpdateProfile>
  );
};

const StyledUpdateProfile = styled.div`
  > div:first-child {
    display: flex;
    justify-content: space-between;
  }

  .update_profile_content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
    .grid_profile_info {
    }
    .grid_other {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .grid_basic {
    }
  }
`;
