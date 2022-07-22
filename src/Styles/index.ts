import styled from "styled-components";
import { colors } from "@utils";
import { Select } from "antd";

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
  margin-bottom: 25px;
  font-weight: 900;
  font-size: 32px;
  line-height: 42px;

  letter-spacing: -0.015em;

  color: #193b68;
`;

export const StyledInput = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: #ffffff;

    border: 2px solid #d2d5e4;
    border-radius: 8px;
    padding: 12px 20px;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #d2d5e4;
      opacity: 1; /* Firefox */

      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #d2d5e4;

      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    }
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
`;

export const StyledButton = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.0075em;

  color: #ffffff;

  button {
    cursor: pointer;
    width: 100%;
    padding: 11px 0;
    background: ${colors.primaryNavy};
    border-radius: 10px;
    border: 0;
  }

  button:hover {
    transform: scale(1.02, 1.02);
  }
  button:active {
    transform: scale(0.95, 0.95);
  }
`;
