import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import CameraIcon from "@material-ui/icons/Camera";
import Container from "@material-ui/core/Container";
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';

class Footer extends Component {

  render() {
    return (
      <BottomNavigation style={{ backgroundColor: "#3e3364", width: "100%", position: "absolute", bottom: "0", height: "70px"}}>
        <BottomNavigationAction
          label="Scan"
          value="scan"
          href="/"
          icon={<HomeIcon />}
          style={{ color: "#fff"}}
        />
        <BottomNavigationAction
          label="History"
          value="recents"
          href="/weather"
          icon={<LanguageIcon />}
          style={{ color: "#fff"}}
        />
        <BottomNavigationAction
          label="History"
          value="recents"
          href="/system"
          icon={<SwapCallsIcon />}
          style={{ color: "#fff"}}
        />
      </BottomNavigation>
    );
  }
}

export default Footer;
