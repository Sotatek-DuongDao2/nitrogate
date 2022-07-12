import styled from "styled-components";
import { colors } from "@utils";

export const StyledCard = styled.div`
  width: inherit;
  background-color: ${colors.backgroundWhite};
  padding: 16px 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`;

export const StyledTitleCard = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.015em;

  color: ${(props) => (props.color ? props.color : "#193b68")};
`;

export const StyledTitlePage = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 32px;
  line-height: 42px;

  letter-spacing: -0.015em;

  color: #193b68;
`;
