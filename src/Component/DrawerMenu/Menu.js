import React, {Component} from 'react';
import './Menu.style.scss'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ApartmentIcon from "@material-ui/icons/Apartment";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import RadioIcon from "@material-ui/icons/Radio";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import List from "@material-ui/core/List";
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Chip from "@material-ui/core/Chip";
import {Avatar} from "@material-ui/core";

class Menu extends Component {
    render() {
        return (
                <List>
                    <Link to={'/'} className={'option'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><HomeIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Home</span></ListItemText>
                        </ListItem>
                    </Link>
                    <Divider style={{backgroundColor:'#CCD2D4'}}/>


                    <Link to={'/mailbox'} className={'option'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><MailOutlineIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>MailBox</span>  <Chip size={"small"} avatar={<Avatar>{5}</Avatar>} /> </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider style={{backgroundColor:'#CCD2D4'}}/>


                    <Link className={'option'} to={'/apartment'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><ApartmentIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Apartment</span></ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/billing'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><MonetizationOnIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Billing</span> </ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/complain'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><AccountTreeIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Complain</span> </ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/employee'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><AssignmentIndIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Employee</span> </ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/listening'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><RadioIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Listening</span> </ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/schedule'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><ScheduleIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Schedule</span> </ListItemText>
                        </ListItem>
                    </Link>

                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/subscriber'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><SubscriptionsIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Subscriber</span> </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider style={{backgroundColor:'#CCD2D4'}}/>

                    <Link className={'option'} to={'/building'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><HomeWorkIcon style={{color:'#CCD2D4'}}/></ListItemIcon>
                            <ListItemText><span className={'title'}>Building</span> </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider style={{backgroundColor:'#CCD2D4'}}/>
                </List>

        );
    }
}

export default Menu;