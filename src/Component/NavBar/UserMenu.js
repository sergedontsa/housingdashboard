import React from 'react';
import Menu from "@material-ui/core/Menu";
import {Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

const UserMenu =({anchorEl, handleClose}) => {

    return (

         <Menu anchorEl={anchorEl} keepMounted={true} open={Boolean(anchorEl)} onClose={handleClose} PaperProps={{style:{height: '20vh', width:'25vh'}}}>

             <List component={'nav'}>
                 <Link to={'/profile'} className={'option'}>
                    <ListItem button={true}>
                        <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                 </Link>
                 <Divider/>

                 <Link to={"/account"} className={'option'}>
                    <ListItem button={true}>
                        <ListItemIcon><PermContactCalendarIcon/></ListItemIcon>
                        <ListItemText>My Account</ListItemText>
                    </ListItem>
                 </Link>


                 <Divider/>
                 <ListItem button={true}>
                     <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                     <ListItemText>Log out</ListItemText>
                 </ListItem>

             </List>



         </Menu>

    );

}

export default UserMenu;