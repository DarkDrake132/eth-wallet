import React from "react";

import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TransactionList(props) {
  const { transactions, refresherTransactionList } = props;
  return (
    <Container>
      <Button onClick={refresherTransactionList}>Refresh</Button>
      {transactions?.map((transaction) => {
        const data = Object.entries(transaction);
        return (
          <Accordion key={transaction.hash}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Transaction Hash: {transaction.hash}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.map(([key, value], index) => (
                <Typography key={key + value + index}>
                  {key}: {key === "timeStamp" ? (new Date(+value).toLocaleString()) : value}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
