import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";

import { CloseModal } from "@images";

interface ICustomModal {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  modal_classname?: string;
  body_classname?: string;
  content_classname?: string;
  overlay_classname?: string;
}

export const CustomModal = React.forwardRef<any, ICustomModal>((props: ICustomModal, ref: any) => {
  const {
    isOpen,
    onClose,
    content,
    modal_classname,
    content_classname,
    body_classname,
    overlay_classname,
  } = props;

  return (
    <StyledCustomModal>
      {isOpen === true ? (
        <div className={clsx(modal_classname !== undefined && modal_classname, "modal_container")}>
          <div
            className={clsx(overlay_classname !== undefined && overlay_classname, "modal_overlay")}
          ></div>
          <div
            className={clsx(body_classname !== undefined && body_classname, "modal_body")}
            ref={ref}
          >
            <CloseModal onClick={onClose} className="btn_close" />
            <div
              className={clsx(
                content_classname !== undefined && content_classname,
                "modal_content"
              )}
            >
              {content}
            </div>
          </div>
        </div>
      ) : null}
    </StyledCustomModal>
  );
});

const StyledCustomModal = styled.div`
  .modal_container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal_overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000000;
    opacity: 0.4;
  }

  .modal_body {
    position: absolute;
    background: #ffffff;
    border-radius: 20px;
    padding: 60px;
    /* width: 100px; */

    .btn_close {
      position: absolute;
      right: 20px;
      top: 18px;

      cursor: pointer;
    }
  }
`;
