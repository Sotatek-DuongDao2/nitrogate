import React from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
// import type { PaginationProps } from "antd";

import { StyledTitlePage } from "@styles";
import { Filter } from "./Filter";
import { WithdrawalTable } from "./WithdrawalTable";
import { Generate } from "@images";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export const WithdrawalHistory = () => {
  // const itemRender: PaginationProps["itemRender"] = (_: any, type: any, originalElement: any) => {
  //   if (type === "prev") {
  //     return <Prev />;
  //   }
  //   if (type === "next") {
  //     return <Next />;
  //   }
  //   return originalElement;
  // };
  return (
    <StyledWithdrawalHistory>
      <StyledTitlePage>Withdrawal History</StyledTitlePage>
      <Filter />
      <div className="table_container">
        <WithdrawalTable />
      </div>
      <div className="footer">
        <CSVLink data={csvData} filename={"my-file.csv"} target="_blank" className="csv_generate">
          <Generate />
          <h3>Generate csv</h3>
        </CSVLink>
        {/* <Pagination
          total={100}
          pageSize={10}
          showTitle={false}
          showSizeChanger={false}
          showLessItems
          onChange={(page, pageSize) => console.log(page, pageSize)}
          itemRender={itemRender}
        /> */}
      </div>
    </StyledWithdrawalHistory>
  );
};

const StyledWithdrawalHistory = styled.div`
  .footer {
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #e9edf3;
    border-radius: 4px;
  }

  .csv_generate {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6.5px 11px;
    h3 {
      margin: 0;

      font-weight: 700;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;
      color: #1e87f0;
    }
  }
  .table_container {
    margin-bottom: 20px;
  }
`;
