import React, { ReactNode } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { colors } from "@utils";
import { StyledCard, StyledTitleCard } from "@styles";

interface IAggregated {
  title?: string;
  viewmore?: boolean;
  items: IAggregatedItem[];
}

interface IAggregatedItem {
  icon: ReactNode;
  name: string | ReactNode;
  value: string | number;
}

export const Aggregated = (props: IAggregated) => {
  const { title, viewmore, items } = props;
  const navigate = useNavigate();
  return (
    <StyledAggregated>
      <StyledCard>
        <div>
          <StyledTitleCard>{title}</StyledTitleCard>
          {viewmore === true && (
            <h3 className="view_more" onClick={() => navigate("/account-detail")}>
              VIEW MORE
            </h3>
          )}
        </div>
        {items.length > 0 &&
          items.map((item, index) => (
            <>
              <div key={index}>
                {item.icon}
                {item.name}
                {item.value}
              </div>
              {index < items.length - 1 && <hr />}
            </>
          ))}
      </StyledCard>
    </StyledAggregated>
  );
};

const StyledAggregated = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 8px;

  .view_more {
    color: #1e87f0;
    cursor: pointer;
  }
`;
