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
      <StyledCard className="content">
        <div className="content_img">
          <img src={spaceShipImg} alt="ship" />
        </div>
        <div className="btn_setup" onClick={handleOpen2FA}>
          <Setup /> <h3>Set up 2FA</h3>
        </div>
        <div className="btn_setup" onClick={handleOpenGA}>
          <Setup />
          <h3> Set up GA</h3>
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
    </StyledFAGAAuthentication>
  );
};

const StyledFAGAAuthentication = styled.div`
  .content {
    width: 415px;

    .content_img {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 86px 0;
    }

    .btn_setup {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 10px;
      width: 100%;
      height: 35px;

      background: #e9edf3;
      border-radius: 4px;

      h3 {
        margin: 0;

        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.2px;

        color: #1e87f0;
      }
    }
  }
`;
