import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './dashboard/NavBar'
import SideBar from './dashboard/SideBar'
import Home from './dashboard/Home'
import Footer from './dashboard/Footer'
import CheckLogin from '../config/checkLogin';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
    }

    loadPage() {

    }

    render() {
        CheckLogin()
        return (
        <div id="app">
            <NavBar/>
            <SideBar/>
            <Home/>
            <Footer/>
        </div>
        );
    };
}
export default Dashboard;
