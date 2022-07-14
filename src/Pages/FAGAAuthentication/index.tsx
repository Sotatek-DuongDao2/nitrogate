import React, { useState } from "react";
import styled from "styled-components";

import { StyledTitlePage, StyledCard } from "@styles";
import spaceShipImg from "../../Images/Spaceship.png";
import { Setup } from "@images";
import { CustomModal } from "@components";

const FAAuthen = () => {
  return <>content</>;
};

export const FAGAAuthentication = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <StyledFAGAAuthentication>
      <StyledTitlePage>FAGAAuthentication</StyledTitlePage>
      <div className="content">
        <StyledCard>
          <img src={spaceShipImg} alt="ship" />
          <div className="btn_setup" onClick={handleOpen}>
            <Setup /> Set up 2FA
          </div>
          <div className="btn_setup" onClick={handleOpen}>
            <Setup /> Set up GA
          </div>
        </StyledCard>
        <CustomModal isOpen={isModalOpen} onClose={handleClose} content={<FAAuthen />} />
      </div>
    </StyledFAGAAuthentication>
  );
};

const StyledFAGAAuthentication = styled.div`
  .content {
    width: 50%;

    .btn_setup {
      cursor: pointer;
      margin-bottom: 10px;
      width: 100%;
      height: 35px;

      background: #e9edf3;
      border-radius: 4px;
    }
  }
`;
