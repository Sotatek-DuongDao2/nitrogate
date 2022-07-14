import React, { ReactNode } from "react";
import styled from "styled-components";

interface IInfoCard {
  icon: ReactNode;
  title: string;
  content: string;
}

export const InfoCard = (props: IInfoCard) => {
  const { icon, title, content } = props;
  return (
    <StyledInfoCard>
      <div className="icon">{icon}</div>
      <div className="content">
        <h3>{title}</h3>
        <p> {content}</p>
      </div>
    </StyledInfoCard>
  );
};

const StyledInfoCard = styled.div`
  display: flex;
  .content {
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #1d263a;
    }

    p {
      margin: 0;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;

      color: #626674;
    }
  }
`;
