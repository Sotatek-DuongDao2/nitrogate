import React from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

import { StyledTitlePage } from "@styles";
import { Filter } from "./Filter";
import { WithdrawalTable } from "./WithdrawalTable";
import { Generate, Next, Prev } from "@images";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export const WithdrawalHistory = () => {
  const itemRender: PaginationProps["itemRender"] = (_: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return <Prev />;
    }
    if (type === "next") {
      return <Next />;
    }
    return originalElement;
  };
  return (
    <StyledWithdrawalHistory>
      <StyledTitlePage>Withdrawal History</StyledTitlePage>
      <Filter />
      <WithdrawalTable />
      <div className="footer">
        <CSVLink data={csvData} filename={"my-file.csv"} target="_blank">
          <Generate />
          Generate csv
        </CSVLink>
        <Pagination
          total={100}
          pageSize={10}
          showTitle={false}
          showSizeChanger={false}
          showLessItems
          onChange={(page, pageSize) => console.log(page, pageSize)}
          itemRender={itemRender}
        />
      </div>
    </StyledWithdrawalHistory>
  );
};

const StyledWithdrawalHistory = styled.div`
  .footer {
    display: flex;
    justify-content: space-between;
  }
`;
