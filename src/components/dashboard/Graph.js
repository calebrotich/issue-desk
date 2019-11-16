import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {dashboardService} from "../../actions/dashboardService";

let graphData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label                    : 'My First dataset',
            borderColor              : 'rgba(75,192,192,1)',
            data                     : [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label                    : 'Second',
            borderColor              : 'rgba(75,192,192,1)',
            data                     : [65, 30, 54, 81, 99, 34, 30]
        }
    ]
};

class Graph extends React.Component {

    componentDidMount() {
        this.loadPage();

    }
    loadPage() {
        dashboardService.getDashboard().then(resData => {
            let dashData = resData.data.yearly_issues_report;
            this.setState({dashboardData: dashData});

            let total_open = [];
            let total_ongoing = [];
            let total_resolved =[];
            let total_follow_up_required =[];

            for(let i in dashData) {
                total_open.push([dashData[i].issues_report.total_open]);
                total_ongoing.push([dashData[i].issues_report.total_ongoing]);
                total_resolved.push([dashData[i].issues_report.total_resolved]);
                total_follow_up_required.push([dashData[i].issues_report.total_follow_up_required]);
            }
        //    console.log(total_open);

            graphData = {
                labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label                    : 'Open',
                        borderColor              : '#00d1b2',
                        data                     : total_open
                    },
                    {
                        label                    : 'Total Ongoing',
                        borderColor              : '#167df0',
                        data                     : total_ongoing
                    },
                    {
                        label                    : 'Resolved',
                        borderColor              : '#ffdd57',
                        data                     : total_resolved
                    },
                    {
                        label                    : 'Follow Up Required',
                        borderColor              : '#ff3860',
                        data                     : total_follow_up_required
                    }
                ]
            };

        });
    }

    render()
    {
        return (
            <div className="flex flex-col items-center w-full max-w-md">
                <h2>Yearly Issues Report</h2>
                <Line data={graphData}
                />
            </div>
        );
    }
}

export default Graph;