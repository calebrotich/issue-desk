import React from 'react';
import  '../../css/dashboard.css'
import {issuesService} from "../../actions/issuesService";
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

class CreateIssue extends React.Component {

    componentDidMount() {
    //    this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
    }

    handleSubmit = () => {
        const data = this.state;
        console.log(data);
        data.channel_id =parseInt(data.channel_id);
        data.assigned_to =parseInt(data.assigned_to);
        data.status_id =parseInt(data.status_id);
        issuesService.createIssue(data);
    };

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
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
                      <form>
                      <div className="field is-horizontal">
                        <div className="field-body">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Customer phone/e-mail</label>
                            </div>
                            <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" required name="customer_email" placeholder="Enter your e-mail / phone" onChange={e => this.onChange(e)}  />
                                <span className="icon is-small is-left"><i
                                  className="mdi mdi-mail"></i></span>
                            </p>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select onChange={e => this.onChange(e)} name="status_id" >
                                            <option>--Issue Status--</option>
                                            <option value="0">Open</option>
                                            <option value="1">Ongoing</option>
                                            <option value="2">Resolved</option>
                                            <option value="3">Follow up required</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                          </div>
                          <hr />
                          <div className="field is-horizontal">
                              <div className="field-label is-normal">
                                  <label className="label">Query Issue</label>
                              </div>
                              <div className="field-body">
                                  <div className="field">
                                      <p className="control is-expanded has-icons-left">
                                          <input className="input" type="text" name="query_issue" placeholder="Query Issue" onChange={e => this.onChange(e)}  />
                                          <span className="icon is-small is-left"><i
                                              className="mdi mdi-mail"></i></span>
                                      </p>
                                  </div>
                                  <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select onChange={e => this.onChange(e)} name="channel_id" >
                                                  <option>--Select channel--</option>
                                                  <option value="1">Chat</option>
                                                  <option value="2">Email</option>
                                                  <option value="3">Call</option>
                                                  <option value="4">Social Media</option>
                                                  <option value="5">Issue Desk</option>
                                                  <option value="6">Other</option>
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
                                                placeholder="Explain how we can help you"  onChange={e => this.onChange(e)} name="issue_details"  ></textarea>
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
                                                placeholder="Advice given to the user at the moment" onChange={e => this.onChange(e)} name="action" ></textarea>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              <hr></hr>
                          <div className="field is-horizontal">
                              <div  style={{display: 'none'}}>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select onChange={e => this.onChange(e)} name="created_by" >
                                                <option>Created By B</option>
                                                <option value="CX_TEAM">CX TEAM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div className="field-body">
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Assigned to</label>
                                    </div>
                                    <div className="field-body">
                                    <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select name="assigned_to" onChange={e => this.onChange(e)} >
                                                  <option value={JSON.parse(localStorage.userObject).id}>{localStorage.fullname}</option>
                                              </select>
                                          </div>
                                      </div>
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
                                                      <button type="button" onClick={() => this.handleSubmit()}   className="button is-primary">
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
