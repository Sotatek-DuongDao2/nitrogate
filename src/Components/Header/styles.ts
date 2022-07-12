import styled from "styled-components";
import { colors } from "@utils";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${colors.backgroundWhite};
  height: 70px;

  .select_language {
    margin-right: 20px;
    cursor: pointer;
  }
  .profile {
    cursor: pointer;
    display: inherit;
    align-items: center;
    background: ${colors.backgroundNavy};
    border-radius: 17%;
    color: #ffffff;
    .avatar {
      margin-right: 20px;
    }
  }
`;
