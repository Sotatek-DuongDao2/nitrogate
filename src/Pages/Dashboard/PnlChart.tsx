import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ["May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15"];

const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Cumulative PNL",
      borderColor: "#1F77B4",
      borderWidth: 1,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -10, max: 10 })),
    },
    {
      type: "bar" as const,
      label: "Daily PNL (bps)",
      backgroundColor: "#FF7F0E",
      data: labels.map(() => faker.datatype.number({ min: -10, max: 10 })),
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

import { StyledCard, StyledTitleCard } from "@styles";

export const PnlChart = () => {
  return (
    <StyledPnlChart>
      <StyledCard>
        <StyledTitleCard>PnL chart</StyledTitleCard>

        <Chart type="bar" data={data} />
      </StyledCard>
    </StyledPnlChart>
  );
};

const StyledPnlChart = styled.div`
  display: flex;
`;
