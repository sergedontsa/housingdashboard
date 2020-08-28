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

class Content extends Component {

   render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path={'/apartment'} component={ApartmentPage}/>
                    <Route exact={true} path={'/billing'} component={BillingPage}/>
                    <Route exact={true} path={'/complain'} component={ComplainPage}/>
                    <Route exact={true} path={'/employee'} component={EmployeePage}/>
                    <Route exact={true} path={'/listening'} component={ListeningPage}/>
                    <Route exact={true} path={'/schedule'} component={SchedulePage}/>
                    <Route exact={true} path={'/subscriber'} component={SubscriberPage}/>
                    <Route exact={true} path={'/tenant'} component={TenantPage}/>
                    <Route exact={true} path={'/building'} component={BuildingPage}/>
                </Switch>
            </div>
        );
    }
}

export default Content;