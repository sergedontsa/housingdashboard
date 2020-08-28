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

class Menu extends Component {
    render() {
        return (
                <List>
                    <Link className={'option'} to={'/apartment'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><ApartmentIcon/></ListItemIcon>
                            <ListItemText>Apartment</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/billing'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
                            <ListItemText>Billing</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/complain'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><AccountTreeIcon/></ListItemIcon>
                            <ListItemText>Complain</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/employee'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><AssignmentIndIcon/></ListItemIcon>
                            <ListItemText>Employee</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/listening'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><RadioIcon/></ListItemIcon>
                            <ListItemText>Listening</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/schedule'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><ScheduleIcon/></ListItemIcon>
                            <ListItemText>Schedule</ListItemText>
                        </ListItem>
                    </Link>

                    <Divider/>

                    <Link className={'option'} to={'/subscriber'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><SubscriptionsIcon/></ListItemIcon>
                            <ListItemText>Subscriber</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider/>

                    <Link className={'option'} to={'/building'}>
                        <ListItem className={'list-item'}>
                            <ListItemIcon><HomeWorkIcon/></ListItemIcon>
                            <ListItemText>Building</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider/>
                </List>

        );
    }
}

export default Menu;