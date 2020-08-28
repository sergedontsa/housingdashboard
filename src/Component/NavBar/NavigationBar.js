import React from "react";
import AppBar, {Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow:1
    }
}));
export default function NavigationBar(){
    const classes = useStyle();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event)=>{
        setAuth(event.target.checked)
    }
    const handleMenu = (event) =>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
        <div className={classes.root}>

            <AppBar position={`static`}>
                <Toolbar>
                    <IconButton edge={`start`} className={classes.menuButton} classes={`inherit`} aria-label={`menu`}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
