/**
*
* AppBar
*
*/

import React from 'react';
import IconButton from '../IconButton';
import {Link} from 'react-router';

import styles from './styles.css';

function AppBar({toggleDrawer, email}) {
  const loginLink = email || (
    <Link to="/login">
      login
    </Link>
  )
  return (
    <div className={styles.appBar}>
      <IconButton
        icon="bars"
        buttonClass={styles.icon}
        iconClass={styles.iconButton}
        onClick={toggleDrawer}/>

      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  email: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func.isRequired
};

export default AppBar;
