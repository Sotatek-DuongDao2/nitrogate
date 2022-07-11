import styled from "styled-components";
import { colors } from "@utils";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: row;

  .side_bar_container {
    width: 300px;
  }
  .app_content {
    width: 100%;
    background-color: ${colors.background};
  }
`;

export const StyledLoginLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  .side_backgroung {
    background: ${colors.backgroundNavy};
    flex: 1;
  }
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
