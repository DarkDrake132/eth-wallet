import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { chooseNetwork } from "../../actions/networkActions";
import { setDisconnected } from "../../actions/walletActions";
import {
  makeSelectNetwork,
  makeSelectNetworkList,
} from "../../selectors/networkSelectors";
import { makeSelectIsConnected } from "../../selectors/walletSelectors";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function Header(props) {
  const { network, networkList, chooseNetwork, isConnected, setDisconnected } =
    props;

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "blue" }}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              ETHEREUM Wallet
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">Choose network</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={network ? network : ""}
                label="Age"
                onChange={(e) => chooseNetwork(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {networkList?.map((network, index) => {
                  return (
                    <MenuItem key={index} value={network.name}>
                      {network.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          {isConnected ? (
            <Box
              sx={{ flexGrow: 1 }}
              style={{ display: "flex", flexFlow: "row-reverse" }}
            >
              <Button onClick={setDisconnected} style={{ textAlign: "right" }}>
                Logout
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const mapStateToProps = createStructuredSelector({
  network: makeSelectNetwork(),
  networkList: makeSelectNetworkList(),
  isConnected: makeSelectIsConnected(),
});
const mapDispatchToProps = (dispatch) => {
  return {
    chooseNetwork: (network) => dispatch(chooseNetwork(network)),
    setDisconnected: () => dispatch(setDisconnected()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
