
import axios from 'axios';
import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MovieIcon from '@material-ui/icons/Movie';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };



  return (
    <div>
      <AppBar style={{ color: "#222222", backgroundColor: "#3e3364" }}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} style={{ color: "#fff"}}>
            <MenuIcon />
          </IconButton>
<Typography variant="h6" style={{ color: "#fff", marginLeft: "20px"}}>To-Do APP!&API</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          <ListItem component={Link} to="/">

            <HomeIcon />
            <ListItemText primary="Home" />

            </ListItem>
          <ListItem button="AAAAA"
          aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
          >
          <LanguageIcon />
            <ListItemText primary="Api" />
          </ListItem>


          <ListItem component={Link} to="/system">
            <SwapCallsIcon />
            <ListItemText primary="System"/>
          </ListItem>


          <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem component={Link} to="/weather">

                <ListItemIcon>
                  <WbSunnyIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary="Weather" />

              </StyledMenuItem>

              <StyledMenuItem component={Link} to="/newmovie">
                <ListItemIcon>
                  <LocalMoviesIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary="Movie" />

              </StyledMenuItem>

              <StyledMenuItem component={Link} to="/youtube">
                <ListItemIcon>
                  <YouTubeIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary="Youtube" />

              </StyledMenuItem>
              <StyledMenuItem component={Link} to="/animelist">
                <ListItemIcon>
                  <MovieIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary="Anime" />

              </StyledMenuItem>
              <StyledMenuItem component={Link} to="/rakuten">
                <ListItemIcon>
                  <ShoppingCartIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary="Rakuten" />

              </StyledMenuItem>



            </StyledMenu>

        </List>
      </Drawer>
    </div>
  );
};

export default Header;
