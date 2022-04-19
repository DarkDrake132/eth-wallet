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

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function TransactionList(props) {
  const { transactions, refresherTransactionList } = props;
  return (
    <Container>
      <Button onClick={refresherTransactionList}>Refresh</Button>
      {transactions?.map((transaction) => {
        const data = Object.entries(transaction);
        return (
          <Accordion key={transaction.hash} style={{ textAlign: 'left' }}>
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
                  {key === "timeStamp" ? "Date sent" : Capitalize(key)}: {key === "timeStamp" ? (new Date(+value * 1000).toLocaleString()) : value}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
