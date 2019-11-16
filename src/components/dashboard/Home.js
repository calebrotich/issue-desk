import React from 'react';
import  '../../css/dashboard.css'
import {dashboardService} from "../../actions/dashboardService";

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
                                          <h1 className="title">
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_ongoing}
                                                  </h1>
                                              }
                                          </h1>
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
                                          <h1 className="title">
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_resolved}
                                                  </h1>
                                              }
                                          </h1>
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
                                          <h1 className="title">
                                              {
                                                  dashboardData!=null &&
                                                  <h1 className="title">
                                                      {this.state.dashboardData.issues_report.total_follow_up_required}
                                                  </h1>
                                              }
                                          </h1>
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
                              <div className="chartjs-size-monitor">
                                  <div className="chartjs-size-monitor-expand">
                                      <div></div>
                                  </div>
                                  <div className="chartjs-size-monitor-shrink">
                                      <div></div>
                                  </div>
                              </div>
                              <canvas id="big-line-chart" width="2992" height="1000" className="chartjs-render-monitor"
                                      style={{display: 'block', height: '400px', width: '1197px'}}></canvas>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card has-table has-mobile-sort-spaced">
                  <header className="card-header">
                      <p className="card-header-title">
                          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
                          Clients
                      </p>
                      <a href="#" className="card-header-icon">
                          <span className="icon"><i className="mdi mdi-reload"></i></span>
                      </a>
                  </header>
                  <div className="card-content">
                      <div className="table-container">

                          <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
                              <thead>
                              <tr>
                                  <th></th>
                                  <th>Name</th>
                                  <th>Company</th>
                                  <th>City</th>
                                  <th>Progress</th>
                                  <th>Created</th>
                                  <th></th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Rebecca Bauch</td>
                                  <td>Daugherty-Daniel</td>
                                  <td>South Cory</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="79">79
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Oct 25, 2018">Oct 25,
                                          2018</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Felicita Yundt</td>
                                  <td>Johns-Weissnat</td>
                                  <td>East Ariel</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="67">67
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Jan 8, 2019">Jan 8,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Mr. Larry Satterfield V</td>
                                  <td>Hyatt Ltd</td>
                                  <td>Windlerburgh</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="16">16
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Dec 18, 2018">Dec 18,
                                          2018</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Mr. Broderick Kub</td>
                                  <td>Kshlerin, Bauch and Ernser</td>
                                  <td>New Kirstenport</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="71">71
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Sep 13, 2018">Sep 13,
                                          2018</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/barry-weber.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Barry Weber</td>
                                  <td>Schulist, Mosciski and Heidenreich</td>
                                  <td>East Violettestad</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="80">80
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Jul 24, 2019">Jul 24,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Bert Kautzer MD</td>
                                  <td>Gerhold and Sons</td>
                                  <td>Mayeport</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="62">62
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Mar 30, 2019">Mar 30,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Lonzo Steuber</td>
                                  <td>Skiles Ltd</td>
                                  <td>Marilouville</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="17">17
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Feb 12, 2019">Feb 12,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Jonathon Hahn</td>
                                  <td>Flatley Ltd</td>
                                  <td>Billiemouth</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="74">74
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Dec 30, 2018">Dec 30,
                                          2018</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Ryley Wuckert</td>
                                  <td>Heller-Little</td>
                                  <td>Emeraldtown</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="54">54
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Jun 28, 2019">Jun 28,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="is-image-cell">
                                      <div className="image">
                                          <img src="https://avatars.dicebear.com/v2/initials/sienna-hayes.svg"
                                               className="is-rounded"/>
                                      </div>
                                  </td>
                                  <td>Sienna Hayes</td>
                                  <td>Conn, Jerde and Douglas</td>
                                  <td>Jonathanfort</td>
                                  <td className="is-progress-col">
                                      <progress max="100" className="progress is-small is-primary" value="55">55
                                      </progress>
                                  </td>
                                  <td>
                                      <small className="has-text-grey is-abbr-like" title="Mar 7, 2019">Mar 7,
                                          2019</small>
                                  </td>
                                  <td>
                                      <div className="buttons is-right">
                                          <button className="button is-small is-primary" type="button">
                                              <span className="icon"><i className="mdi mdi-eye"></i></span>
                                          </button>
                                          <button className="button is-small is-danger jb-modal"
                                                  data-target="sample-modal" type="button">
                                              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div className="notification">
                      <div className="buttons has-addons">
                          <button className="button is-active">
                              1
                          </button>
                          <button className="button">
                              2
                          </button>
                          <button className="button">
                              3
                          </button>
                      </div>
                  </div>
              </div>
          </section>
          </>

  );
    };
}
export default Home;
