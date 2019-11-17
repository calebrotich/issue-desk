import React from 'react';
import  '../css/dashboard.css'
import NavBar from "./dashboard/NavBar";
import SideBar from "./dashboard/SideBar";

let user =JSON.parse(localStorage.userObject);
class Profile extends React.Component {

    componentDidMount() {
    //    this.loadPage();

    }

    componentDidUpdate() {
     //   this.loadPage();
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
                <li>Profile</li>
                <li>Profile</li>
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
                              Profile
                          </h1></div>
                      </div>
                      <div className="level-right" >
                          <div className="level-item"></div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section is-main-section">
              <div className="tile is-ancestor">
                  <div className="tile is-parent">
                      <div className="card tile is-child">
                          <header className="card-header">
                              <p className="card-header-title">
                                  <span className="icon"><i className="mdi mdi-account-circle default"></i></span>
                                  Edit Profile
                              </p>
                          </header>
                          <div className="card-content">
                              <form>
                                      <div className="field is-horizontal">
                                          <div className="field-label is-normal">
                                              <label className="label">Name</label>
                                          </div>
                                          <div className="field-body">
                                              <div className="field">
                                                  <div className="control">
                                                      <input type="text" autoComplete="on" name="name" required=""
                                                             value={user.name}className="input"/>
                                                  </div>
                                                  <p className="help">Required. Your name</p>
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
                                                      <input type="email" autoComplete="on" name="email" required=""
                                                             value={user.email} className="input"/>
                                                  </div>
                                                  <p className="help">Required. Your e-mail</p>
                                              </div>
                                          </div>
                                      </div>
                                  <div className="field is-horizontal">
                                      <div className="field-label is-normal">
                                          <label className="label">Phone Number</label>
                                      </div>
                                      <div className="field-body">
                                          <div className="field">
                                              <div className="control">
                                                  <input type="tel" autoComplete="on" name="phone" required=""
                                                         value={user.phone} className="input"/>
                                              </div>
                                              <p className="help">Required. Your Phone Number</p>
                                          </div>
                                      </div>
                                  </div>
                                      <hr></hr>
                                          <div className="field is-horizontal">
                                              <div className="field-label is-normal"></div>
                                              <div className="field-body">
                                                  <div className="field">
                                                      <div className="control">
                                                          <button type="submit" className="button is-primary">
                                                              Submit
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
                      <div className="card tile is-child">
                          <header className="card-header">
                              <p className="card-header-title">
                                  <span className="icon"><i className="mdi mdi-account default"></i></span>
                                  Profile
                              </p>
                          </header>
                          <div className="card-content">
                              <div className="is-user-avatar image has-max-width is-aligned-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="#00d1b2" width="140" height="140" viewBox="0 0 18 18"><path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/></svg>

                              </div>
                              <hr></hr>
                                  <div className="field">
                                      <label className="label">Name</label>
                                      <div className="control is-clearfix">
                                          <input type="text" readOnly="" value={user.name} className="input is-static"/>
                                      </div>
                                  </div>
                                  <hr></hr>
                                      <div className="field">
                                          <label className="label">E-mail</label>
                                          <div className="control is-clearfix">
                                              <input type="text" readOnly="" value={user.email}
                                                     className="input is-static"/>
                                          </div>
                                      </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <header className="card-header">
                      <p className="card-header-title">
                          <span className="icon"><i className="mdi mdi-lock default"></i></span>
                          Change Password
                      </p>
                  </header>
                  <div className="card-content">
                      <form>
                          <div className="field is-horizontal">
                              <div className="field-label is-normal">
                                  <label className="label">Current password</label>
                              </div>
                              <div className="field-body">
                                  <div className="field">
                                      <div className="control">
                                          <input type="password" autoComplete="on" name="password_current"
                                                 required="required" autcomplete="current-password" className="input"/>
                                      </div>
                                      <p className="help">Required. Your current password</p></div>
                              </div>
                          </div>
                          <hr></hr>
                              <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                      <label className="label">New password</label>
                                  </div>
                                  <div className="field-body">
                                      <div className="field">
                                          <div className="control">
                                              <input type="password" autoComplete="new-password" name="password"
                                                     required="required" className="input"/>
                                          </div>
                                          <p className="help">Required. New password</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="field is-horizontal">
                                  <div className="field-label is-normal">
                                      <label className="label">Confirm password</label>
                                  </div>
                                  <div className="field-body">
                                      <div className="field">
                                          <div className="control">
                                              <input type="password" autoComplete="new-password"
                                                     name="password_confirmation" required="required" className="input"/>
                                          </div>
                                          <p className="help">Required. New password one more time</p>
                                      </div>
                                  </div>
                              </div>
                              <hr></hr>
                                  <div className="field is-horizontal">
                                      <div className="field-label is-normal"></div>
                                      <div className="field-body">
                                          <div className="field">
                                              <div className="control">
                                                  <button type="submit" className="button is-primary">
                                                      Submit
                                                  </button>
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
export default Profile;
