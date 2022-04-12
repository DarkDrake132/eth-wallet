import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  makeSelectWallet,
  makeSelectWalletList,
  makeSelectCurrentPage,
} from "../../selectors/walletSelectors";

import { Grid, Divider, Button, Typography } from "@mui/material";

function HomePage(props) {
  const { wallet, networkList, currentPage } = props;
  console.log(wallet, networkList, currentPage);

  return (
    <Grid container spacing={1} p={10}>
      <Grid item xs>
        <Typography variant="h4">Creat new Wallet</Typography>
        <Typography variant="subtitle1">
          Click the button below to start create your new wallet
        </Typography>
        <Button style={{ margin: 12 }} variant="contained">
          Create
        </Button>
      </Grid>
      <Divider orientation="vertical" flexItem>
        OR
      </Divider>
      <Grid item xs>
        <Typography variant="h4">Import your Wallet</Typography>
        <Typography variant="subtitle1">
          If you've already had an account, then import it here
        </Typography>
        <Button style={{ margin: 12 }} variant="contained">
          Import
        </Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = createStructuredSelector({
    wallet: makeSelectWallet(),
    networkList: makeSelectWalletList(),
    currentPage: makeSelectCurrentPage(),
});

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);