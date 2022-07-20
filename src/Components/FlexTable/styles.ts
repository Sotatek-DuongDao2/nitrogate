import styled from "styled-components";

export const StyledFlexTable = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    background: #f3f5f6;
  }

  &::-webkit-scrollbar {
    height: 7px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #d2d5e4;
    &:hover {
      background: #c2c5d1;
    }
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 30px;

    .head {
      width: 100%;
      border-bottom: 2px solid #e9edf3;

      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #b0b2b9;
    }

    th {
      font-weight: 600;
    }

    .body {
      & > .row:last-child > .cell {
        /* border-bottom: 0; */
      }
    }

    tr {
      border-bottom: 1px solid #e9edf3;
    }

    tr td:not(:first-child),
    tr th:not(:first-child) {
      padding-left: 70px;
    }
  }

  .cell {
    text-align: left;
    padding: 12px 0px;

    white-space: nowrap;
    text-overflow: ellipsis;
    p {
      margin: 0;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #1d263a;
    }
  }
`;
