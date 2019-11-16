import React from 'react';
import  '../../css/dashboard.css'
import {issuesService} from "../../actions/issuesService";
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

class CreateIssue extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dashboardData: null
        };
    }

    componentDidMount() {
    //    this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
    }

    handleSubmit = event => {
        event.preventDefault();

        const issueDta = {
            query_issue: this.state.query_issue,
        };
    };
    loadPage() {
        // dashboardService.getDashboard().then(resData =>{
        //     //   alert(JSON.stringify(resData.data));
        //     let dashData = resData.data;
        //    this.setState({dashboardData:dashData})
        //
        //
        // });

    }
    render() {
        const {dashboardData} = this.state;
  return (
      <div id="app">
          <NavBar/>
          <SideBar/>
      <section className="section is-title-bar">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ul>
                <li>Issues</li>
                <li>Create</li>
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
                          Create Issue
                      </p>
                  </header>
                  <div className="card-content">
                      <form  onSubmit={this.handleSubmit}>
                          <div className="field is-horizontal">
                              <div className="field-label is-normal">
                                  <label className="label">Query Issue</label>
                              </div>
                              <div className="field-body">
                                  <div className="field">
                                      <p className="control is-expanded has-icons-left">
                                          <input className="input" type="text" placeholder="Query Issue"/>
                                          <span className="icon is-small is-left"><i
                                              className="mdi mdi-mail"></i></span>
                                      </p>
                                  </div>
                                  <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select>
                                                  <option>Channel</option>
                                                  <option>Chat</option>
                                                  <option>Email</option>
                                                  <option>Call</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <hr></hr>
                              <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                      <label className="label">Issues Details</label>
                                  </div>
                                  <div className="field-body">
                                      <div className="field">
                                          <div className="control">
                                              <textarea className="textarea"
                                                        placeholder="Explain how we can help you"></textarea>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          <div className="field is-horizontal">
                              <div className="field-label is-normal">
                                  <label className="label">Action</label>
                              </div>
                              <div className="field-body">
                                  <div className="field">
                                      <div className="control">
                                              <textarea className="textarea"
                                                        placeholder="Explain how we can help you"></textarea>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              <hr></hr>
                          <div className="field is-horizontal">
                              <div className="field-label is-normal">
                                  <label className="label">Issue</label>
                              </div>
                              <div className="field-body">
                                  <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select>
                                                  <option>CX TEAM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select>
                                                  <option>Karuga</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                                  <div className="field is-horizontal">
                                      <div className="field-label">

                                      </div>
                                      <div className="field-body">
                                          <div className="field">
                                              <div className="field is-grouped">
                                                  <div className="control">
                                                      <button type="submit" className="button is-primary">
                                                          <span>Create</span>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                      </form>
                  </div>
              </div>
          </section>

      </div>

  );
    };
}
export default CreateIssue;
