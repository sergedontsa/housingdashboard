import React, {Component} from 'react';
import './Dashbard.style.scss'
import DoughnutChart from "../../Chart/DoughnutChart";


class DashboardPage extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <DoughnutChart/>
            </div>
        );
    }
}

export default DashboardPage;