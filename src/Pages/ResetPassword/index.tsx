import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Logo } from "@images";
import clsx from "clsx";

export const ResetPassword = () => {
  const [stepReset, setStepReset] = useState<"first" | "second">("first");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reEnterPassword, setReEnterPassword] = useState<string>("");
  const [isNotMatchPassword, setIsNotMatchPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSendLink = () => {
    //do something
    setStepReset("second");
  };

  const handleSaveNewPassword = () => {
    if (newPassword === reEnterPassword) {
      //success
      navigate("/login");
      setIsNotMatchPassword(false);
    } else {
      setIsNotMatchPassword(true);
    }
  };
  return (
    <StyledResetPassword>
      <div className="header">
        <Logo />
      </div>
      <hr />
      <div className="content">
        {stepReset === "first" ? (
          <div className="first_step">
            <h2>Password reset</h2>

            <div className="content_item">
              <label htmlFor="accountMail">Your account email</label>
              <input type="text" id="accountMail" />
            </div>

            <button className="btn_submit" onClick={handleSendLink}>
              Send password reset link
            </button>
          </div>
        ) : (
          <div className={clsx("first_step", stepReset === "second" && "second_step")}>
            <h2>Password reset</h2>

            <div className="content_item">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="text"
                id="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="content_item">
              <label htmlFor="reEnterPassword">Re-enter New Password</label>
              <input
                type="text"
                id="reEnterPassword"
                onChange={(e) => setReEnterPassword(e.target.value)}
              />
            </div>
            {isNotMatchPassword === true && (
              <h4 className="not_match_error">Password does not match chain</h4>
            )}

            <button className="btn_submit" onClick={handleSaveNewPassword}>
              Save new password
            </button>
          </div>
        )}
      </div>
    </StyledResetPassword>
  );
};

const StyledResetPassword = styled.div`
  height: 100vh;
  background: #e5e5e5;

  .header {
    padding: 20px 24px;
  }

  hr {
    border: 0px;
    opacity: 0.1;
    border-bottom: 1px solid #000000;
  }

  .content {
    display: flex;
    justify-content: center;
    > div {
      margin-top: 150px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 476px;
      padding: 60px;
      background: #ffffff;
      border-radius: 20px;
    }

    .second_step {
      margin-top: 91px;
    }

    h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.015em;

      color: #193b68;
    }
  }

  .content_item {
    display: grid;
    gap: 5px;

    input {
      height: 46px;
      border: 2px solid #d2d5e4;
      border-radius: 8px;
      padding: 0 20px;

      background: #ffffff;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
  }

  button {
    height: 46px;
    cursor: pointer;

    background: #193b68;
    border-radius: 10px;
    border: 0;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.0075em;

    color: #ffffff;

    &:hover {
      transform: scale(1.05, 1.05);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
  .not_match_error {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #de3210;
  }
`;
