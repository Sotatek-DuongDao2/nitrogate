import styled from "styled-components";
import { colors } from "@utils";

export const StyledHeader = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${colors.background};
  height: 70px;
  border-bottom: 1px solid #ccc;

  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: none !important;
    box-shadow: none !important;
  }

  .select_language {
    margin-right: 20px;
    cursor: pointer;

    .ant-select-selection-item {
      display: flex;
      align-items: center;

      font-weight: 600;
      font-size: 16px;
      line-height: 24px;

      letter-spacing: -0.0075em;

      color: #626674;
    }

    .ant-select-selector {
      border: 0px;
      border-color: transparent;
      background: inherit;
    }
  }
  .profile {
    cursor: pointer;
    display: inherit;
    align-items: center;
    gap: 8px;
    padding: 4px;

    background: #e9edf3;
    border: 1px solid #d2d5e4;
    border-radius: 55px;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.0075em;
    color: #1d263a;
    .avatar {
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;
