import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import { Tab, Box, Container, Alert, Snackbar } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";

import TransactionList from "../../components/TransactionList/TransactionList";
import TransactionForm from "../../components/TransactionForm/TransactionForm";

import Wallet from "../../components/Wallet/Wallet";

import {
  makeSelectWallet,
  makeSelectIsConnected,
} from "../../selectors/walletSelectors";
import { makeSelectProvider } from "../../selectors/networkSelectors";

import { parseEther } from "../../utils/ethers";

function Transaction(props) {
  const [tabValue, setTabValue] = useState("1");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const { isConnected, wallet, provider } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (Object.keys(provider).length === 0) {
      setSnackbarOpen(true);
    }
  }, [provider]);

  const hideSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSendTransaction = async (to, value) => {
    const walletInstance = wallet.wallet.connect(provider);
    const tx = {
      to: to,
      value: parseEther(value),
    };

    await wallet.wallet.signTransaction(tx);
    await walletInstance.sendTransaction(tx);
  };

  return (
    <Container>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <TabList
              onChange={handleChangeTab}
              aria-label="lab API tabs example"
            >
              <Tab label="Wallet Details" value="1" />
              <Tab label="Send Transaction" value="2" />
              <Tab label="Transaction History" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Wallet wallet={wallet} />
          </TabPanel>
          <TabPanel value="2">
            <TransactionForm
              wallet={wallet}
              sendTransaction={handleSendTransaction}
            />
          </TabPanel>
          <TabPanel value="3">
            <TransactionList />
          </TabPanel>
        </TabContext>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={hideSnackbar}
      >
        <Alert onClose={hideSnackbar} severity="warning" sx={{ width: "100%" }}>
          Please connect to a wallet provider to use or see more about your
          wallet
        </Alert>
      </Snackbar>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  wallet: makeSelectWallet(),
  isConnected: makeSelectIsConnected(),
  provider: makeSelectProvider(),
});

export default connect(mapStateToProps)(Transaction);
