import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Content from "./Component/Content/Content";
import Menu from "./Component/DrawerMenu/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserMenu from "./Component/NavBar/UserMenu";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {Badge} from "@material-ui/core";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor:'#CCD2D4',
      boxShadow:0,
      color: 'black'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),

  },
  typographyStyles:{
    flex:1,
  },
  iconStyle:{
    marginRight: theme.spacing(4),
    cursor:'pointer'
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
            <Menu/>
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.typographyStyles}> Housing Authority</Typography>


            <Badge badgeContent={4} color={'secondary'}>
                <NotificationsActiveIcon className={classes.iconStyle}/>
            </Badge>


                <MailOutlineIcon className={classes.iconStyle}/>


            <Badge>
                <AccountCircleIcon className={classes.iconStyle}  onClick={handleClick}/>
            </Badge>
            <UserMenu anchorEl={anchorEl} handleClose={handleClose}/>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">

          <Hidden smUp implementation="css">
            <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen} onClose={handleDrawerToggle}
                classes={{ paper: classes.drawerPaper, }} ModalProps={{ keepMounted: true }} >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper,  }} variant="permanent" open> {drawer} </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />

                <Content/>

        </main>
      </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
