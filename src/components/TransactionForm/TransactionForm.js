import React, { useState } from "react";

import { Box, TextField, Container, Button } from "@mui/material";

export default function TransactionForm(props) {
  const { wallet, sendTransaction } = props;
  const [transaction, setTransaction] = useState({
    from: "",
    to: "",
    amount: "", //ether format
  });

  const handleChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendTransaction(transaction.to, transaction.amount);
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField name="from" label="From" value={wallet.wallet.address} disabled />
        <TextField
          name="to"
          label="To"
          value={transaction.to}
          onChange={handleChange}
        />
        <TextField
          name="amount"
          label="Amount"
          value={transaction.amount}
          onChange={handleChange}
          type="number"
        />
      </Box>
      <Button
        style={{ margin: 20, paddingLeft: 30, paddingRight: 30 }}
        variant="contained"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Container>
  );
}
