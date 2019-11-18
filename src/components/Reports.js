import React from 'react';
import ReportsData from './reportData';
import { connect } from 'react-redux';
import listIssues from '../actions/listIssues';
import { withRouter } from 'react-router-dom';
import NavBar from "./dashboard/NavBar";
import SideBar from "./dashboard/SideBar";

const Reports = ({ history, listIssues, issues, match: { params: { status } } }) => {

  return (
    <div id="app">
      <NavBar/>
      <SideBar/> 
      <section className="section is-title-bar">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ul>
                <li>Home</li>
                <li>Users Report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<section className="section is-main-section">
  <div className="card">
    <header className="card-header">
        <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-ballot"></i></span>
            {
              `Registered Users`
            }
        </p>
    </header>
    <div className="card-content">
     <ReportsData />
    </div>
  </div>
</section>

    </div>
  );
}

const mapStateToProps = state => ({
  issues: state.issues,
});

export default connect(
  mapStateToProps,
  { listIssues },
)(withRouter(Reports));
