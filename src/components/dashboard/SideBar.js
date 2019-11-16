import React from 'react';
import  '../../css/dashboard.css'

export default function SideBar() {
 const toggleClass = (id) => {
    const oldClassName = document.getElementById(id).className;
    const newClassName = oldClassName === '' ? 'is-active' : '';
    document.getElementById(id).className = newClassName;
  };


  return (
      <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div className="aside-tools-label">
            <span><b>Issue</b> Desk</span>
          </div>
        </div>
        <div className="menu is-menu-main">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a href="" className="is-active router-link-active has-icon">
                <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                <span className="menu-item-label">Dashboard</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">Examples</p>
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
                  <a href="#void">
                    <span className="icon"><i className="mdi mdi-email-open"></i></span>
                    <span>Open Issues</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span className="icon"><i className="mdi mdi-email-edit"></i></span>
                    <span>Ongoin Issues</span>
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
                    <span>Ongoin Issues</span>
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
              <a href="tables.html" className="has-icon">
                <span className="icon"><i className="mdi mdi-account-group"></i></span>
                <span className="menu-item-label">Customers</span>
              </a>
            </li>

            <li>
              <a href="tables.html" className="has-icon">
                <span className="icon"><i className="mdi mdi-account"></i></span>
                <span className="menu-item-label">Users</span>
              </a>
            </li>

            <li>
              <a href="tables.html" className="has-icon">
                <span className="icon"><i className="mdi mdi-chart-bar"></i></span>
                <span className="menu-item-label">Reports</span>
              </a>
            </li>


          </ul>
          <p className="menu-label">Settings</p>
          <ul className="menu-list">

            <li>
              <a href="profile.html" className="has-icon">
                <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                <span className="menu-item-label">Profile</span>
              </a>
            </li>

            <li>
              <a href="forms.html" className="has-icon">
                <span className="icon"><i className="mdi mdi-settings"></i></span>
                <span className="menu-item-label">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  );
}
