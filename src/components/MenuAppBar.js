import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { setAuthedUser } from '../actions/authedUser'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 10,
  },
});

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleLogout = (e) => {
    const { dispatch } = this.props

    e.preventDefault()
	dispatch(setAuthedUser(null))
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Would You Rather?
            </Typography>
              	<Button
                  onClick={this.handleLogout}
            	  variant="contained" 
                  color="inherit"
      			  className={classes.button}
                >
            	<ExitToApp className={classes.leftIcon}/>
                </Button>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}


export default connect(mapStateToProps)(withStyles(styles)(MenuAppBar));