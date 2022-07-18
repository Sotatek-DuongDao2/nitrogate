import styled from "styled-components";
import { colors } from "@utils";

export const StyledSidebar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundWhite};
  box-shadow: 0px 2px 6px rgba(25, 59, 104, 0.12);

  .sidebar_logo {
    position: relative;

    svg {
      cursor: pointer;
    }

    .sidebar_close_icon {
      position: absolute;
      right: -37px;
    }

    .sidebar_close_icon:hover {
      transform: scale(1.05, 1.05);
    }
    .sidebar_close_icon:active {
      transform: scale(0.95, 0.95);
    }
  }

  h2,
  h3 {
    text-align: left;
    margin: 0;
  }

  h2 {
    color: ${colors.primaryNavy};

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.0075em;
  }

  h3 {
    color: #626674;

    font-weight: 600;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;
  }

  .sidebar_open {
    width: 255px;
    padding: 20px 25px 0 25px;
    display: grid;
    gap: 30px;

    .sidebar_list_item {
      display: grid;
      gap: 10px;
      margin: 0 -25px;
    }

    .sidebar_item {
      width: 100%;
      cursor: pointer;

      h2 {
        width: 100%;
        margin-left: 14px;
      }

      &:hover {
        background: #f3f5f6;
      }

      svg:first-child {
        margin-left: 25px;
      }

      .show_arrow {
        margin-right: 25px;
      }

      > div:first-child {
        height: 52px;

        display: flex;
        align-items: center;
      }
    }

    .sidebar_details {
      > div {
        display: flex;
        align-items: center;
        height: 42px;
      }

      h3 {
        padding-left: 29px;
        width: 100%;
      }

      h3:hover {
        color: #193b68;
      }
    }

    .sidebar_item_active {
      background: #f3f5f6;
    }
  }

  .sidebar_close {
    width: 68px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .sidebar_close_icon {
      right: -34px;
    }

    .sidebar_list_item {
      width: 100%;
      /* display: grid; */
    }

    .sidebar_item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 52px;
      cursor: pointer;
      &:hover {
        background: ${colors.background};
      }
    }
  }
`;
