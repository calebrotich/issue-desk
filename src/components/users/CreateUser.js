import React from 'react';
import  '../../css/dashboard.css'
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";
import {dashboardService} from "../../actions/dashboardService";

class CreateUser extends React.Component {

    componentDidMount() {
    //    this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = this.state;
        if(data!=null) {
            if (data.password === data.password_confirm) {
                data.type = 1;
                delete  data.password_confirm;
             //   console.log(data);
                document.getElementById('password').classList.remove('is-danger');
                document.getElementById('password_text').textContent = 'Password  match';
                document.getElementById('password_text').classList.remove('is-danger');
                document.getElementById('passwordConfirm_text').textContent = 'Password match';
                document.getElementById('passwordConfirm_text').classList.remove('is-danger');
                  dashboardService.createUser(data)
            } else {
                document.getElementById('password').classList.add('is-danger');
                document.getElementById('password_text').textContent = 'Password do not match';
                document.getElementById('password_text').classList.add('is-danger');
                document.getElementById('passwordConfirm_text').textContent = 'Password do not match';
                document.getElementById('passwordConfirm_text').classList.add('is-danger');

            }
        }

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
                <li>User</li>
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
                          <span className="icon"><i className="mdi mdi-account-circle default"></i></span>
                          Create User
                      </p>
                  </header>

                  <div className="tile is-ancestor">
                      <div className="tile is-parent">
                          <div className="card tile is-child">
                              <div className="card-content">
                                  <form onSubmit={(event) => this.handleSubmit(event)}>
                                          <div className="field is-horizontal">
                                              <div className="field-label is-normal">
                                                  <label className="label">Name</label>
                                              </div>
                                              <div className="field-body">
                                                  <div className="field">
                                                      <div className="control">
                                                          <input type="text" autoComplete="on" name="name" required="required"
                                                                 className="input" onChange={e => this.onChange(e)} />
                                                      </div>
                                                      <p className="help">Required. Your name</p>
                                                  </div>
                                              </div>
                                          </div>
                                      <div className="field is-horizontal">
                                          <div className="field-label is-normal">
                                              <label className="label">Phone</label>
                                          </div>
                                          <div className="field-body">
                                              <div className="field is-expanded">
                                                  <div className="field has-addons">
                                                      <p className="control">
                                                          <a className="button is-static">
                                                              +254
                                                          </a>
                                                      </p>
                                                      <p className="control is-expanded">
                                                          <input className="input" type="tel"
                                                                 placeholder="Phone number" required="required" name="phone" onChange={e => this.onChange(e)} />
                                                      </p>
                                                  </div>
                                                  <p className="help">Do not enter the first zero</p>
                                              </div>
                                          </div>
                                      </div>
                                          <div className="field is-horizontal">
                                              <div className="field-label is-normal">
                                                  <label className="label">E-mail</label>
                                              </div>
                                              <div className="field-body">
                                                  <div className="field">
                                                      <div className="control">
                                                          <input type="email" autoComplete="on" name="email" required="required"
                                                                className="input" onChange={e => this.onChange(e)} />
                                                      </div>
                                                      <p className="help">Required. Your e-mail</p>
                                                  </div>
                                              </div>
                                          </div>
                                      <div className="field is-horizontal">
                                          <div className="field-label is-normal">
                                              <label className="label">Password</label>
                                          </div>
                                          <div className="field-body">
                                              <div className="field">
                                                  <div className="control">
                                                      <input type="password" autoComplete="new-password" name="password" id="password"
                                                             required="required" className="input" onChange={e => this.onChange(e)} />
                                                  </div>
                                                  <p id="password_text" className="help">Required.  password</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="field is-horizontal">
                                          <div className="field-label is-normal">
                                              <label className="label">Confirm Password</label>
                                          </div>
                                          <div className="field-body">
                                              <div className="field">
                                                  <div className="control">
                                                      <input type="password" autoComplete="new-password"
                                                             name="password_confirm" required="required" id="passwordConfirm"
                                                             className="input" onChange={e => this.onChange(e)} />
                                                  </div>
                                                  <p id="passwordConfirm_text" className="help">Required. Password one more time</p>
                                              </div>
                                          </div>
                                      </div>
                                      <hr></hr>
                                              <div className="field is-horizontal">
                                                  <div className="field-label is-normal"></div>
                                                  <div className="field-body">
                                                      <div className="field">
                                                          <div className="control">
                                                              <button type="submit" className="button is-primary" >
                                                                  Create
                                                              </button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="tile is-parent">
                          <img src="https://freewebillustrations.com/static/images/preview/illustrations-gallery-it-support.png" alt={'Create User'}  style={{height: '420px',margin: 'auto'}}/>
                      </div>
                  </div>


              </div>
          </section>

      </div>

  );
    };
}
export default CreateUser;
