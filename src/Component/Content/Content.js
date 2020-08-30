import React, {Component} from 'react';
import './Content.style.scss'
import {Route, Switch } from 'react-router-dom'
import ApartmentPage from "../../Page/Apartment/ApartmentPage";
import BillingPage from "../../Page/Billing/BillingPage";
import BuildingPage from "../../Page/Building/BuildingPage";
import ComplainPage from "../../Page/Complain/ComplainPage";
import EmployeePage from "../../Page/Employee/EmployeePage";
import ListeningPage from "../../Page/Listening/ListeningPage";
import SchedulePage from "../../Page/Schedule/SchedulePage";
import SubscriberPage from "../../Page/Subscriber/SubscriberPage";
import TenantPage from "../../Page/Tenant/TenantPage";
import MyAccountPage from "../../Page/MyAccount/MyAccountPage";
import DashboardPage from "../../Page/Dashboard/DashboardPage";
import MyProfilePage from "../../Page/Profile/MyProfilePage";
import MailBoxPage from "../../Page/MailBox/MailBoxPage";
import SignAndSignOutPage from "../../Page/SignAndSigOut/SignAndSignOutPage";
import ForgotPasswordPage from "../../Page/ForgotPassword/ForgotPasswordPage";


class Content extends Component {

   render() {
        return (

                <Switch>
                    <Route exact={true} path={'/'} component={DashboardPage}/>
                    <Route exact={true} path={'/apartment'} component={ApartmentPage}/>
                    <Route exact={true} path={'/billing'} component={BillingPage}/>
                    <Route exact={true} path={'/complain'} component={ComplainPage}/>
                    <Route exact={true} path={'/employee'} component={EmployeePage}/>
                    <Route exact={true} path={'/listening'} component={ListeningPage}/>
                    <Route exact={true} path={'/schedule'} component={SchedulePage}/>
                    <Route exact={true} path={'/subscriber'} component={SubscriberPage}/>
                    <Route exact={true} path={'/tenant'} component={TenantPage}/>
                    <Route exact={true} path={'/building'} component={BuildingPage}/>
                    <Route exact={true} path={'/account'} component={MyAccountPage}/>
                    <Route exact={true} path={'/profile'} component={MyProfilePage}/>
                    <Route exact={true} path={'/mailbox'} component={MailBoxPage}/>
                    <Route exact={true} path={'/signInAndSignOut'} component={SignAndSignOutPage}/>
                    <Route exact={true} path={'/reset/password'} component={ForgotPasswordPage}/>
                </Switch>

        );
    }
}

export default Content;