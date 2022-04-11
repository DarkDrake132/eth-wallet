import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { chooseNetwork } from "../../actions";
import { makeSelectNetwork, makeSelectNetworkList } from "../../selectors";

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
} from "@mui/material";

function Header(props) {
  const { network, networkList, chooseNetwork } = props;

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "blue" }}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            ETHEREUM Wallet
          </Typography>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const mapStateToProps = createStructuredSelector({
  network: makeSelectNetwork(),
  networkList: makeSelectNetworkList(),
});
const mapDispatchToProps = (dispatch) => {
  return {
    chooseNetwork: (network) => dispatch(chooseNetwork(network)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
