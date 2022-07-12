import styled from "styled-components";
import { colors } from "@utils";

export const StyledSidebar = styled.div`
  height: 100vh;
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundWhite};

  svg {
    margin: 0 5px;
    cursor: pointer;
  }

  h2,
  h3 {
    cursor: pointer;
    text-align: left;
  }

  .sidebar_open {
    width: 300px;
  }
  .sidebar_close {
    width: 50px;
  }
`;
