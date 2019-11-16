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

    handleSubmit = event => {
      //  event.preventDefault();
        console.log("click");
        const data = this.state;
      //  console.log(this.state);
        data.status_id =0;
        data.assigned_to =1;
        data.channel_id =parseInt(data.channel_id);
      //  console.log(data);
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
                                              <select onChange={e => this.onChange(e)}   name="channel_id" >
                                                  <option>Channel</option>
                                                  <option value="1">Chat</option>
                                                  <option value="2">Email</option>
                                                  <option value="3">Call</option>
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
                                                        placeholder="Explain how we can help you" onChange={e => this.onChange(e)} name="action" ></textarea>
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
                                              <select onChange={e => this.onChange(e)} name="created_by" >
                                                  <option>Created By B</option>
                                                  <option value="CX_TEAM">CX TEAM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="field">
                                      <div className="control">
                                          <div className="select is-fullwidth">
                                              <select onChange={e => this.onChange(e)} name="assigned_to">
                                                  <option >Assign To</option>
                                                  <option value="1">Karuga</option>
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
