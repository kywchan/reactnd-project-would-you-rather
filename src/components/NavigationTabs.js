import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    	flexWrap: 'wrap',
  	},
  	tabs: {
    	width: '100%',
  	},
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={styles.AppBar}>
          <Tabs value={value} onChange={this.handleChange} styles={styles.tab}>
            <Tab 
      			label={"Unanswered Polls ("+(Object.keys(this.props.questions).length - Object.keys(this.props.authedUserProfile.answers).length)+")"}
      		/>
            <Tab 
				label={"Answered Polls ("+(Object.keys(this.props.authedUserProfile.answers).length)+")"} 
			/>
            <Tab 
				label="Leaderboard" href="#basic-tabs" 
			/>
          </Tabs>
        </AppBar>     
      	<TabContainer>
     		{ value === 0 && ("UA") }
			{ value === 1 && ("Allo") }
			{ value === 2 && ("Hello") }
      	</TabContainer>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps ({ authedUser, questions, users }) {  
  
  return {
    authedUser: authedUser,
    authedUserProfile: Object.values(users).filter((user) => { return user.id === authedUser }).pop(),
    questions: Object.values(questions),
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SimpleTabs));


