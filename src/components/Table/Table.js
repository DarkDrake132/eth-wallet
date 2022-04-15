import React from "react";

import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Pagination,
} from "@mui/material";

export default function TableComponent({ data, currentPage, changePage, onWalletClick }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              hover={true}
              key={index}
              onClick={() => onWalletClick(row)}
              style={{ cursor: "pointer" }}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.wallet.address}
              </TableCell>
              <TableCell align="right">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          count={100}
          page={currentPage}
          onChange={changePage}
          variant="outlined"
          color="primary"
          style={{ margin: 20 }}
        />
      </Box>
    </TableContainer>
  );
}
