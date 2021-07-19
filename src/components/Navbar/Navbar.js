import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import OpenCartBtn from '../OpenCartBtn/OpenCartBtn';
import HomeLink from '../HomeLink/HomeLink';
import useStyles from './styles.js';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.navbarContainer} >
          <MenuButton />

          <HomeLink />

          <OpenCartBtn />
        </div>
      </div>
      <div className={classes.navBarSpacing}></div>
    </>
  );
};

export default Navbar;
