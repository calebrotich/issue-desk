import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import  '../../css/dashboard.css'

const NavBar = ({ history }) => {
  document.documentElement.classList.add('has-aside-left', 'has-aside-mobile-transition', 'has-navbar-fixed-top', 'has-aside-expanded');
  const toggleMenu = () => {
  if(document.documentElement.classList.contains('has-aside-mobile-expanded'))
    {
      document.documentElement.classList.remove('has-aside-mobile-expanded');
    }else{
    document.documentElement.classList.add('has-aside-mobile-expanded');
    }
  };
  const logout = () => {
    document.documentElement.className="";
    localStorage.clear();
    history.push('/');
  }
  return (
      <nav id="navbar-main" className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle" onClick={() => toggleMenu()}>
            <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
          </a>
          <div className="navbar-item">
            <div className="control"><input placeholder="Search everywhere..." className="input"/></div>
          </div>
        </div>
        <div className="navbar-brand is-right">
          <a className="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
            <span className="icon"><i className="mdi mdi-dots-vertical"></i></span>
          </a>
        </div>
        <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
              <a className="navbar-link is-arrowless">
                <div className="is-user-avatar">
                  <span className="icon"><i className="mdi mdi-24px mdi-account-circle"></i></span>
                </div>
                <div className="is-user-name"><span>
                  {
                    localStorage.getItem('fullname')
                  }
                  </span></div>
                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" onClick={() => history.push('/profile')}>
                  <span className="icon"><i className="mdi mdi-account"></i></span>
                  <span>My Profile</span>
                </a>
                <hr className="navbar-divider"/>
                  <a className="navbar-item" onClick={() => logout()}>
                    <span className="icon"><i className="mdi mdi-logout"></i></span>
                    <span>Log Out</span>
                  </a>
              </div>
            </div>
            <a href="/dashboard" title="About"
               className="navbar-item has-divider is-desktop-icon-only">
              <span className="icon"><i className="mdi mdi-help-circle-outline"></i></span>
              <span>About</span>
            </a>
            <a title="Log out" className="navbar-item is-desktop-icon-only" onClick={() => logout()}>
              <span className="icon"><i className="mdi mdi-logout"></i></span>
              <span>Log out</span>
            </a>
          </div>
        </div>
      </nav>
  );
}

export default withRouter(NavBar);
