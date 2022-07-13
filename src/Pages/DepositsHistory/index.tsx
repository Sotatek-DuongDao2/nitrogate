import React from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

import "antd/dist/antd.min.css";

import { StyledTitlePage } from "@styles";
import { DepositTable } from "./DepositTable";
import { Filter } from "./Filter";
import { Generate, Next, Prev } from "@images";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export const DepositsHistory = () => {
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
    <StyledDepositsHistory>
      <StyledTitlePage>DepositsHistory</StyledTitlePage>
      <Filter />
      <DepositTable />
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
      {/* <CSVDownload data={csvData} target="_blank" /> */}
    </StyledDepositsHistory>
  );
};

const StyledDepositsHistory = styled.div`
  .footer {
    display: flex;
    justify-content: space-between;
    background: #e9edf3;
    border-radius: 4px;
  }
`;
