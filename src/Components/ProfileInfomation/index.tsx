import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { StyledTitleCard } from "@styles";
import avtIMG from "../../Images/avatar.png";
import subImg from "../../Images/SubBgProfileInfo.png";

interface IProfileInfomation {
  classname?: string;
}

export const ProfileInfomation = (props: IProfileInfomation) => {
  const { classname } = props;
  return (
    <StyledProfileInfomation className={clsx(classname !== undefined && classname)}>
      <StyledTitleCard color="#FFFFFF">Profile Infomation</StyledTitleCard>
      <div className="content">
        <div>
          <div className="avatar">
            <img src={avtIMG} alt="avt" />
          </div>
          <div className="infomation">
            <h2 className="name">Dan Baker</h2>
            <p className="email">danbaker@gmail.com</p>
          </div>
        </div>

        <div className="id">
          <h3>ID: 20a606efdeeb33c92b08af250386b0a8</h3>
        </div>
        <div className="sub_img">
          <img src={subImg} alt="subImg" />
        </div>
      </div>
    </StyledProfileInfomation>
  );
};

const StyledProfileInfomation = styled.div`
  padding: 16px 25px 26px 25px;
  width: 100%;
  height: 100%;
  background: #193b68;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  position: relative;

  p,
  h2,
  h3 {
    margin: 0;
    color: #ffffff;
  }

  .content {
    margin-top: 23px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: left;

    > div:first-child {
      display: flex;
      align-items: center;
    }
  }
  .avatar {
  }
  .infomation {
    margin-left: 15px;

    .name {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      letter-spacing: -0.0075em;
    }

    .email {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;
    }
  }
  .id {
    z-index: 1;

    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;
  }
  .sub_img {
    position: absolute;
    right: 0%;
    top: 0;
    bottom: 0;

    img {
      height: 99.5%;
    }
  }
`;
