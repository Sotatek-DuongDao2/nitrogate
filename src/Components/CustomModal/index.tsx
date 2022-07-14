import React, { ReactNode } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { StyledCard } from "@styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ICustomModal {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const CustomModal = (props: ICustomModal) => {
  const { isOpen, onClose, content } = props;
  let subtitle: any;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <StyledCustomModal>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledCard>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={onClose}>close</button>
          <div>{content}</div>
        </StyledCard>
      </Modal>
    </StyledCustomModal>
  );
};

const StyledCustomModal = styled.div``;
