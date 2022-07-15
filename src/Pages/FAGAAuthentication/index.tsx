import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { StyledTitlePage, StyledCard } from "@styles";
import spaceShipImg from "../../Images/Spaceship.png";
import { Setup } from "@images";
import { CustomModal } from "@components";
import { ModalAuthen } from "./ModalAuthen";

export const FAGAAuthentication = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<"FA" | "GA">("FA");
  const refMouse = useRef<any>();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen2FA = () => {
    setIsModalOpen(true);
    setTypeModal("FA");
  };

  const handleOpenGA = () => {
    setIsModalOpen(true);
    setTypeModal("GA");
  };

  //detech click outside the modal
  useEffect(() => {
    // Function for click event
    const handleOutsideClick = (event: any) => {
      if (isModalOpen === true && refMouse.current && !refMouse.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isModalOpen]);

  return (
    <StyledFAGAAuthentication>
      <StyledTitlePage>FAGAAuthentication</StyledTitlePage>
      <div className="content">
        <StyledCard>
          <img src={spaceShipImg} alt="ship" />
          <div className="btn_setup" onClick={handleOpen2FA}>
            <Setup /> Set up 2FA
          </div>
          <div className="btn_setup" onClick={handleOpenGA}>
            <Setup /> Set up GA
          </div>
        </StyledCard>
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleClose}
          content={
            typeModal === "FA" ? (
              <ModalAuthen title="Email 2FA Setup" />
            ) : (
              <ModalAuthen title="Email GA Setup" />
            )
          }
          ref={refMouse}
        />
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
