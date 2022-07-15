import React from "react";
import styled from "styled-components";
import clsx from "clsx";

interface IAuthen {
  title: string;
  isIncorrectCode?: boolean;
}

export const ModalAuthen = (props: IAuthen) => {
  const { title, isIncorrectCode } = props;
  return (
    <StyledModalAuthen>
      <h2>{title}</h2>

      <div>
        <label htmlFor="email">Enter email address</label>
        <div className="modal_email">
          <input type="text" id="email" />
          <div className="btn_sendcode">Send code</div>
        </div>
      </div>

      <div className={clsx("enter_code", isIncorrectCode === true && "incorrect_input")}>
        <label htmlFor="code">Enter code</label>
        <input type="text" id="code" />
      </div>
      {isIncorrectCode === true ? <h4 className="incorrect_message">Incorrect code</h4> : null}

      <div className="btn_next">Next</div>
    </StyledModalAuthen>
  );
};

const StyledModalAuthen = styled.div`
  display: grid;
  gap: 15px;
  h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.015em;
    color: #193b68;
  }

  .modal_email {
    display: flex;
    align-items: center;
    padding-right: 8px;

    height: 46px;
    border-radius: 8px;
    border: 2px solid #d2d5e4;
    background: #ffffff;

    .btn_sendcode {
      cursor: pointer;
      display: inherit;
      align-items: center;
      justify-content: center;
      width: 76px;
      height: 26px;

      background: rgba(30, 135, 240, 0.2);
      border-radius: 5px;
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;

      color: #1e87f0;
    }

    .btn_sendcode:hover {
      transform: scale(1.05, 1.05);
    }

    .btn_sendcode:active {
      transform: scale(0.95, 0.95);
    }

    input {
      border: none;
      padding: 0 20px;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
  }

  .enter_code {
    display: flex;
    flex-direction: column;

    input {
      height: 46px;

      background: #ffffff;

      border: 2px solid #d2d5e4;
      border-radius: 8px;
      padding: 0 20px;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
  }

  .incorrect_input {
    input {
      border: 2px solid #de3210;
    }
  }

  .incorrect_message {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #de3210;
  }

  .btn_next {
    height: 46px;
    margin-top: 10px;
    cursor: pointer;

    background: #193b68;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.0075em;

    color: #ffffff;
  }
`;
