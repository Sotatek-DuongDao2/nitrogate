import styled from "styled-components";
import { colors } from "@utils";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: row;

  .side_bar_container {
    width: auto;
  }
  .header_and_content {
    width: 100%;
    background-color: ${colors.background};
  }
  .app_content {
    padding: 31px 40px;
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
