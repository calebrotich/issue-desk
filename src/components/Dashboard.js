import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './dashboard/NavBar'
import SideBar from './dashboard/SideBar'
import Home from './dashboard/Home'
import Footer from './dashboard/Footer'
import {dashboardService} from "../actions/dashboardService";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pager: {},
            pageOfItems: []
        };
    }

    componentDidMount() {
        this.loadPage();

    }

    componentDidUpdate() {
        this.loadPage();
    }

    loadPage() {
        dashboardService.getDashboard();
    }

    render() {
        const {pager, pageOfItems} = this.state;
        return (<div id="app">
                <NavBar/>
                <SideBar/>
                <Home/>
                <Footer/>
            </div>
        );
    };
}
export default Dashboard;
