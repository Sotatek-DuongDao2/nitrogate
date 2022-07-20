import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { StyledCard, StyledTitlePage } from "@styles";
import { CustomModal } from "@components";
import { SavedPasswordModal } from "./SavedPasswordModal";

export const ChangePassword = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const refMouse = useRef<any>();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    //cancel
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
    <StyledChangePassword>
      <StyledTitlePage>Change password</StyledTitlePage>
      <div className="change_password_content">
        <StyledCard>
          <div className="change_password_item">
            <label htmlFor="currentPassword">Current password</label>
            <input
              type="text"
              id="currentPassword"
              name="currentPassword"
              placeholder="Enter current password"
            />
          </div>

          <div className="change_password_item">
            <label htmlFor="newPassword">New password</label>
            <input type="text" id="newPassword" name="newPassword" placeholder="Example" />
          </div>

          <div className="change_password_item">
            <label htmlFor="reEnterPassword">Re-enter new password</label>
            <input type="text" id="reEnterPassword" name="reEnterPassword" placeholder="" />
          </div>

          <div className="btn">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save password</button>
          </div>
        </StyledCard>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        content={<SavedPasswordModal onBack={handleClose} />}
        ref={refMouse}
      />
    </StyledChangePassword>
  );
};

const StyledChangePassword = styled.div`
  width: 40%;

  .change_password_content > div {
    display: grid;
    gap: 15px;
    padding-bottom: 100px;
  }

  .change_password_item {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: -0.2px;

      color: #626674;
    }

    input {
      height: 46px;
      padding: 0 20px;

      background: #ffffff;
      border: 2px solid #d2d5e4;
      border-radius: 8px;
    }
  }

  .btn {
    display: flex;
    gap: 15px;
    height: 46px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.0075em;
    > button:first-child {
      flex: 1;
      background: #ffffff;
      border: 2px solid rgba(25, 59, 104, 0.4);
      border-radius: 10px;

      color: #193b68;
    }
    > button:last-child {
      flex: 1;
      background: #193b68;
      border-radius: 10px;

      color: #ffffff;
    }

    button {
      cursor: pointer;
      &:hover {
        transform: scale(1.05, 1.05);
      }
      &:active {
        transform: scale(0.95, 0.95);
      }
    }
  }
`;
