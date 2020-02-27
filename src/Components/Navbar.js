import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import LogoForDarkTheme from "./Logo/logoForDark.svg";
import LogoForLightTheme from "./Logo/logoForLight.svg";
import "./Navbar.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  "& > * + *": {
    marginLeft: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navBackgroundColorWhite: {
    backgroundColor: "transparent"
  }
}));

function Navbar({ theme = "light" }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const img = theme === "light" ? LogoForLightTheme : LogoForDarkTheme;
  const menuButtonColor = theme === "light" ? "default" : "inherit";

  return (
    <div className="navbar">
      <AppBar position="static" className={classes.navBackgroundColorWhite}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img src={img} alt="img" />
            </Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color={menuButtonColor}
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="menu-item">
              <Link to="/" onClick={handleClose} className="menu-link">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className="menu-item">
              <Link to="/search" className="menu-link">
                Search
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className="menu-item">
              <Link to="/order" className="menu-link">
                Order Page
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className="menu-item">
              <Link to="/contact-us" className="menu-link">
                Contact us
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
