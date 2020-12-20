import React, {Component} from 'react';

import './DoughnutChart.style.scss'
import ReactEcharts from "echarts-for-react";


class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                apartment:124,
                building: 214,
                complain: 245
            },
            option :{
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [
                    {
                        name: 'name',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: 'data-1'},
                            {value: 310, name: 'data-2'},
                            {value: 234, name: 'data-3'},
                            {value: 135, name: 'data-4'},
                            {value: 1548, name: 'data-5'}
                        ]
                    }
                ]
            }

        }
    }

    render() {
        return (
            <div>
               <ReactEcharts  option={this.state.option } />
            </div>
        );
    }
}

export default DoughnutChart;