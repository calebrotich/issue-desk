import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#3A58F3',
  },
  kbase: {
    border: '1px solid white'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{boxShadow: 'none'}}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Issue Desk
          </Typography>
          <Button>

          </Button>

          <Button style={{marginRight: '20px'}} color="inherit">Login</Button>
          <Button style={{marginRight: '20px'}} color="inherit">
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                duration={1000}
            >
                Ask Question
            </Link>
          </Button>
          <Button style={{marginRight: '20px'}} color="inherit" className={classes.kbase}>Knowledge Base</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
