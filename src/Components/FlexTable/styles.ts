import styled from "styled-components";

export const StyledFlexTable = styled.div`
  .table {
    border: 1px solid $border;
    border-radius: 5px;
    word-break: break-all;
    width: 100%;
    min-width: 900px;
    .head {
      font-weight: 700;
      background: $table-head;
    }

    .body {
      & > .row:last-child > .cell {
        border-bottom: 0;
      }
    }

    tr {
      height: 60px;
      @media (max-width: $breakpoint) {
        height: 50px;
      }
    }

    tr td:first-child,
    tr th:first-child {
      padding-left: $gutter;
      /* @media (max-width: $breakpoint) {
        padding-left: $gutter-small;
      } */
    }
  }

  .cell {
    padding: 0;
    /* padding-right: $gutter; */
    padding-right: 10px;
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid $border;

    /* @media (max-width: $breakpoint) {
      padding-right: $gutter-small;
    } */
  }
`;
