import React from "react";

import { Modal, Box } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    lineHeight: 5,
  };
  

export default function modal({ open, handleCloseModal, children }) {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
