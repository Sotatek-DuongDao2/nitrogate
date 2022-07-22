import React, { ReactNode } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { StyledCard, StyledTitleCard } from "@styles";
import { ArrowRightBlue } from "@images";

interface IAggregated {
  title?: string;
  viewmore?: boolean;
  items: IAggregatedItem[];
  classname?: string;
}

interface IAggregatedItem {
  icon: ReactNode;
  name: string | ReactNode;
  value: string | number;
}

export const Aggregated = (props: IAggregated) => {
  const { title, viewmore, items, classname } = props;
  const navigate = useNavigate();
  return (
    <StyledAggregated className={clsx(classname !== undefined && classname)}>
      <StyledCard>
        <div className="aggregated_title">
          <StyledTitleCard>{title}</StyledTitleCard>
          {viewmore === true ? (
            <h3 className="view_more" onClick={() => navigate("/account-detail")}>
              VIEW MORE <ArrowRightBlue />
            </h3>
          ) : null}
        </div>
        {items.length > 0 &&
          items.map((item, index) => (
            <>
              <div key={index} className="aggregated_item">
                <div>
                  {item.icon}
                  <div className="item_name">{item.name}</div>
                </div>
                <p className="item_value">{item.value}</p>
              </div>
              {index < items.length - 1 && <hr />}
            </>
          ))}
      </StyledCard>
    </StyledAggregated>
  );
};

const StyledAggregated = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 8px;

  h3,
  p {
    margin: 0;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #e9edf3;
  }

  .aggregated_title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #193b68;

    margin-bottom: 26px;
  }

  .view_more {
    color: #1e87f0;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
  }

  .aggregated_item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.0075em;

    color: #626674;

    > div {
      display: flex;
      align-items: center;
    }

    .item_name {
      margin-left: 12px;
    }

    .item_value {
      color: #000000;
      font-weight: 700;
    }
  }
`;
