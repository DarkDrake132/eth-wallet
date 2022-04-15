import React from "react";

import { Typography, Container, Box } from "@mui/material";

export default function Wallet(props) {
  const { wallet } = props;
  return (
    <Container>
      <Box>
        <Typography>Wallet Address: {wallet?.wallet.address}</Typography>
      </Box>
      <Box>
        <Typography>Current Balance: {wallet?.balance}</Typography>
      </Box>
    </Container>
  );
}
