import React from 'react';
import { withRouter } from 'react-router-dom';
import  '../../css/dashboard.css'

const SideBar = ({ history }) => {
 const toggleClass = (id) => {
    const oldClassName = document.getElementById(id).className;
    const newClassName = oldClassName === '' ? 'is-active' : '';
    document.getElementById(id).className = newClassName;
  };


  return (
      <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div className="aside-tools-label" onClick={() => window.location.replace('/')}>
            <span><b>Issue</b> Desk</span>
          </div>
        </div>
        <div className="menu is-menu-main">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a href="/dashboard" className="router-link-active has-icon">
                <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                <span className="menu-item-label">Dashboard</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">ISSUES AND USERS</p>
          <ul className="menu-list">
            <li id ="issues" onClick={() => toggleClass('issues')}>
              <a className="has-icon has-dropdown-icon">
                <span className="icon"><i className="mdi mdi-book-open"></i></span>
                <span className="menu-item-label">Issues</span>
                <div className="dropdown-icon">
                  <span className="icon"><i className="mdi mdi-plus"></i></span>
                </div>
              </a>
              <ul>
              <li>
                  <a onClick={() => history.push('/issues/all')}>
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>All Issues</span>
                  </a>
                </li>
                <li>
                  <a href="/issues/create">
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>Create Issues</span>
                  </a>
                </li>
                <li>
                  <a href="/issues/open">
                    <span className="icon"><i className="mdi mdi-email-open"></i></span>
                    <span>Open Issues</span>
                  </a>
                </li>
                <li>
                  <a href="/issues/ongoing">
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>Ongoing Issues</span>
                  </a>
                </li>
                <li>
                  <a href="/issues/resolved">
                    <span className="icon"><i className="mdi mdi-email"></i></span>
                    <span>Resolved Issues</span>
                  </a>
                </li>
                <li>
                  <a href="/issues/followup">
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>Requires follow up</span>
                  </a>
                </li>
              </ul>
            </li>

            <li id ="myissues" onClick={() => toggleClass('myissues')}>
              <a className="has-icon has-dropdown-icon">
                <span className="icon"><i className="mdi mdi-account-badge-horizontal"></i></span>
                <span className="menu-item-label">My Issues</span>
                <div className="dropdown-icon">
                  <span className="icon"><i className="mdi mdi-plus"></i></span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="#void">
                    <span className="icon"><i className="mdi mdi-email-open"></i></span>
                    <span>Open Issues</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>Ongoing Issues</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span className="icon"><i className="mdi mdi-email"></i></span>
                    <span>Closed Issues</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" onClick={() => history.push('/customers')} className="has-icon">
                <span className="icon"><i className="mdi mdi-account-group"></i></span>
                <span className="menu-item-label">Customers</span>
              </a>
            </li>

            <li>
              <a href="#" className="has-icon" onClick={() => history.push('/users')}>
                <span className="icon"><i className="mdi mdi-account"></i></span>
                <span className="menu-item-label">Users</span>
              </a>
            </li>

            <li>
              <a href="#" className="has-icon">
                <span className="icon"><i className="mdi mdi-chart-bar"></i></span>
                <span className="menu-item-label">Reports</span>
              </a>
            </li>


          </ul>
          <p className="menu-label">Settings</p>
          <ul className="menu-list">

            <li>
              <a href="#" className="has-icon">
                <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                <span className="menu-item-label">Profile</span>
              </a>
            </li>

            <li>
              <a href="#" className="has-icon">
                <span className="icon"><i className="mdi mdi-settings"></i></span>
                <span className="menu-item-label">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  );
}

export default withRouter(SideBar);
