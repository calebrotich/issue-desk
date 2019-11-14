import React from 'react';
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
    backgroundColor: '#3A58F3',
  },
  kbase: {
    border: '1px solid white'
  }
}));

const NavBar = ({history}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{boxShadow: 'none'}}>
        <Toolbar className={classes.toolbar}>
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
