import React, { useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  toolbar: {
    backgroundColor: 'transparent',
  },
  kbase: {
    border: '1px solid #3A58F3'
  },
  appbar: {
    backgroundColor: 'transparent',
    color: '#3A58F3',
  }
}));

const setCustomStyle = () => {
  document
    .getElementById("tool-bar")
    .setAttribute(
      "style",
      "background-color: #fff !important; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)"
    );
};

/**
 * Set CSS attribute based on IE or current modern Browser
 */
const unSetCustomStyle = () => {
  document
    .getElementById("tool-bar")
    .setAttribute(
      "style",
      "background-color: transparent !important; box-shadow: unset"
    );
};

/**
 * Change navbar behavior base on the window page offset
 */
const headerColorChange = () => {
  const windowsScrollTop = window.pageYOffset;

  if (windowsScrollTop > 22) {
    setCustomStyle();
  } else {
    unSetCustomStyle();
  }
};

const NavBar = ({history}) => {
  const classes = useStyles();

  useLayoutEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return () => {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar} style={{boxShadow: 'none'}}>
        <Toolbar className={classes.toolbar} id="tool-bar">
          <Typography
           variant="h6"
           className={classes.title}
           onClick={() => history.push('/')}
           >
            Issue Desk
          </Typography>
          <Button>

          </Button>

          <Button 
          style={{marginRight: '20px'}} 
          color="inherit"
          onClick={() => history.push('/login')}
          >
            Login
          </Button>
          <Button style={{marginRight: '20px'}} color="inherit">
            <Link
                activeClass="active"
                to="ask-quiz"
                spy={true}
                smooth={true}
                duration={500}
            >
                Ask Question
            </Link>
          </Button>
          <Button style={{marginRight: '20px'}} color="inherit" className={classes.kbase}>
          <Link
                activeClass="active"
                to="knowledge-base"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
            >
                Knowledge Base
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
