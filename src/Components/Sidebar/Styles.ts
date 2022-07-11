import styled from "styled-components";
import { colors } from "@utils";

export const StyledSidebar = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundWhite};

  h2,
  h3 {
    cursor: pointer;
    text-align: left;
  }
`;
