import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Poppins',
  },
  appbar: { background: 'none' },
  appbarWrapper: { width: '80%', margin: '0 auto' },
  appbarTitle: { flexGrow: '1' },
  logo: { color: '#e10f9b' },
  icon: { color: '#e10f9b', fontSize: '2.5rem' },
  container: { textAlign: 'center' },
  title: { color: '#effafe', fontSize: '2rem' },
  goDown: { color: '#e10f9b', fontSize: '4rem' },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Tech<span className={classes.logo}>Bird</span>
          </h1>
          <IconButton>
            <ReorderSharpIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to TechBird{' '}
            <span className={classes.logo}> Technologies</span>
            <br></br>your certified and caring<br></br> digital analytics{' '}
            <span className={classes.logo}>partner</span>
          </h1>
          <Scroll to="products-offered" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
