import React from "react";
import styled from "styled-components";

import savedImg from "../../Images/Tick.png";

interface ISavedPasswordModal {
  onBack: () => void;
}

export const SavedPasswordModal = (props: ISavedPasswordModal) => {
  const { onBack } = props;
  return (
    <StyledSavedPasswordModal>
      <img src={savedImg} alt="saved" />
      <h2>New password saved</h2>
      <button onClick={onBack}>Back</button>
    </StyledSavedPasswordModal>
  );
};

const StyledSavedPasswordModal = styled.div`
  display: flex;
  gap: 35px;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #193b68;
  }

  button {
    width: 210px;
    height: 46px;
    cursor: pointer;

    background: #ffffff;
    border: 2px solid rgba(25, 59, 104, 0.4);
    border-radius: 10px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.0075em;

    color: #193b68;

    &:hover {
      transform: scale(1.05, 1.05);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
`;
