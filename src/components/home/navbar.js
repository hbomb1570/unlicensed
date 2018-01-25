import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Drawer, Divider, withStyles, AppBar, Toolbar, IconButton, withTheme } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Logo.png'

class NavBar extends React.Component {
    static propTypes = {
      classes: PropTypes.object.isRequired,
    };

    state = {
      open: false,
    }

    toggleDrawer = () => this.setState({ open: !this.state.open })

    handleClose = () => this.setState({ open: false })

    render() {
      const { classes } = this.props;

      const sideList = (
        <div className={classes.list}>
          <List>
            <ListItem button component={Link} to="/" onClick={this.handleClose}><ListItemText className={classes.listText} primary="Home" disableTypography /> </ListItem>
            <Divider />
            <ListItem button component={Link} to="/signupaspro" onClick={this.handleClose}><ListItemText className={classes.listText} primary="Signup As Pro" disableTypography /></ListItem>
            <Divider />
            <ListItem button component={Link} to="/loginaspro" onClick={this.handleClose}><ListItemText className={classes.listText} primary="Login As Pro" disableTypography /></ListItem>
            <Divider />
            <ListItem button component={Link} to="/loginnonpro" onClick={this.handleClose}><ListItemText className={classes.listText} primary="User Login/Signup" disableTypography /></ListItem>
          </List>
        </div>)
      return (
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar className={classes.toolBar} >
              <div>
                <IconButton onClick={this.toggleDrawer} className={classes.left}>
                  <MenuIcon className={classes.menu} />
                </IconButton>
                <Drawer
                  className={classes.list}
                  open={this.state.open}
                  onClose={() => this.setState({ open: !this.state.open })}
                >
                  {sideList}
                </Drawer>
              </div>
              <img className={classes.logo} src={Logo} alt="logo" />
            </Toolbar>
          </AppBar>
        </div>
      )
    }
}

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    marginBottom: '0px',
  },
  list: {
    width: '200px',
    textAlign: 'center',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  listText: {
    fontSize: '20px',
  },
  logo: {
    height: '50px',
    mixBlendMode: 'multiply',
  },
  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  menu: {
    fontSize: '32px',
    color: '#706b66',
  },
};

export default withTheme()(withStyles(styles)(NavBar));