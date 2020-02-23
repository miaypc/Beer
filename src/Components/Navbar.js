import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import OrderPage from "../Pages/OrderPage";
import HomePage from "../Pages/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    // backgroundColor: "#2D2D2D"
  }
}));

function Navbar({ img }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBackgroundColorWhite}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={img} alt="img" />
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Router>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Switch>
                <MenuItem onClick={handleClose}>
                  <Route path="/home" component={HomePage}>
                    Home
                  </Route>
                </MenuItem>

                <Route path="/orderpage" component={OrderPage}>
                  <MenuItem onClick={handleClose}>
                    <Link href="#" onClick={preventDefault}>
                      Order Page
                    </Link>
                  </MenuItem>
                </Route>
                <Route path="/orderpage" component={OrderPage}>
                  <MenuItem onClick={handleClose}>
                    <Link href="#" onClick={preventDefault}>
                      Contact us
                    </Link>
                  </MenuItem>
                </Route>
              </Switch>
            </Menu>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
