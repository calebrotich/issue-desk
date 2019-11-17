import React from 'react';
import  '../../css/dashboard.css'
import {dashboardService} from "../../actions/dashboardService";
import Graph from "./Graph";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dashboardData: null
        };
    }

    componentDidMount() {
        this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
    }

    loadPage() {
        dashboardService.getDashboard().then(resData =>{
            //   alert(JSON.stringify(resData.data));
            let dashData = resData.data;
           this.setState({dashboardData:dashData})


        });

    }
    render() {
        const {dashboardData} = this.state;
  return (
      <>
      <section className="section is-title-bar">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ul>
                <li>Home</li>
                <li>Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

          <section className="hero is-hero-bar">
              <div className="hero-body">
                  <div className="level">
                      <div className="level-left">
                          <div className="level-item"><h1 className="title">
                              Dashboard
                          </h1></div>
                      </div>
                      <div className="level-right" style={{display: 'none'}}>
                          <div className="level-item"></div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section is-main-section">
              <div className="tile is-ancestor">
                  <div className="tile is-parent">
                      <div className="card tile is-child">
                          <div className="card-content">
                              <div className="level is-mobile">
                                  <div className="level-item">
                                      <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                          Total Open
                                      </h3>
                                          {
                                              dashboardData!=null &&
                                          <h1 className="title">
                                              {this.state.dashboardData.issues_report.total_open}
                                          </h1>
                                          }
                                      </div>
                                  </div>
                                  <div className="level-item has-widget-icon">
                                      <div className="is-widget-icon"><span
                                          className="icon has-text-primary is-large"><i
                                          className="mdi mdi mdi-email-open mdi-48px"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="tile is-parent">
                      <div className="card tile is-child">
                          <div className="card-content">
                              <div className="level is-mobile">
                                  <div className="level-item">
                                      <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                          Total Ongoing
                                      </h3>
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_ongoing}
                                                  </h1>
                                              }
                                      </div>
                                  </div>
                                  <div className="level-item has-widget-icon">
                                      <div className="is-widget-icon"><span className="icon has-text-info is-large"><i
                                          className="mdi mdi-email-edit mdi-48px"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tile is-parent">
                      <div className="card tile is-child">
                          <div className="card-content">
                              <div className="level is-mobile">
                                  <div className="level-item">
                                      <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                          Total Resolved
                                      </h3>
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_resolved}
                                                  </h1>
                                              }
                                      </div>
                                  </div>
                                  <div className="level-item has-widget-icon">
                                      <div className="is-widget-icon"><span
                                          className="icon has-text-success is-large"><i
                                          className="mdi mdi-email mdi-48px"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tile is-parent">
                      <div className="card tile is-child">
                          <div className="card-content">
                              <div className="level is-mobile">
                                  <div className="level-item">
                                      <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                          Total Follow Up
                                      </h3>
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_follow_up_required}
                                                  </h1>
                                              }
                                      </div>
                                  </div>
                                  <div className="level-item has-widget-icon">
                                      <div className="is-widget-icon"><span
                                          className="icon has-text-warning is-large"><i
                                          className="mdi mdi-finance mdi-48px"></i></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <header className="card-header">
                      <p className="card-header-title">
                          <span className="icon"><i className="mdi mdi-finance"></i></span>
                          Performance
                      </p>
                      <a href="#" className="card-header-icon">
                          <span className="icon"><i className="mdi mdi-reload"></i></span>
                      </a>
                  </header>
                  <div className="card-content">
                      <div className="chart-area">
                          <div style={{height: '100%'}}>
                              <Graph></Graph>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          </>

  );
    };
}
export default Home;
