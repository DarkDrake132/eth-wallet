import React from "react";

import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination
} from "@mui/material";

export default function TableComponent({ data, currentPage, changePage }) {
  return (
    <TableContainer component={Paper} style={{  marginTop: 20 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.address}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="center">
                <Button>Send Transaction</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={100} page={currentPage} onChange={changePage} />
    </TableContainer>
  );
}
