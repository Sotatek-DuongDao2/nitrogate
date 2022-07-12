import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { StyledTitleCard } from "@styles";
import avtIMG from "../../Images/avatar.png";

interface IProfileInfomation {
  classname?: string;
}

export const ProfileInfomation = (props: IProfileInfomation) => {
  const { classname } = props;
  return (
    <StyledProfileInfomation className={clsx(classname !== undefined && classname)}>
      <StyledTitleCard color="#FFFFFF">Profile Infomation</StyledTitleCard>
      <div className="content">
        <div className="avatar">
          <img src={avtIMG} alt="avt" />
        </div>
        <div className="infomation">
          <p className="name">Dan Baker</p>
          <p className="email">danbaker@gmail.com</p>
        </div>
        <div className="id">ID: 20a606efdeeb33c92b08af250386b0a8 </div>
      </div>
    </StyledProfileInfomation>
  );
};

const StyledProfileInfomation = styled.div`
  padding: 16px 25px;
  width: 100%;
  background: #193b68;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #ffffff;

  .content {
    display: flex;
    align-items: center;
    text-align: left;
    .avatar {
    }
  }
`;
