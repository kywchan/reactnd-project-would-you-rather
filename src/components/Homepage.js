import React, { Component } from 'react'
import MenuAppBar from '../components/MenuAppBar'
import NavigationTabs from '../components/NavigationTabs'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class Homepage extends Component {
  handleLogout = (e) => {
    const { dispatch } = this.props

    e.preventDefault()
	dispatch(setAuthedUser(null))
  }

  render() {
 	/*const { questions } = this.props
  	const { id, user } = questions*/
  	return (
    	<div>
         	<MenuAppBar />
            <NavigationTabs />

         	<h1>User: {this.props.authedUser}</h1>
            <Button variant="contained" color="primary" onClick={(e) => this.handleLogout(e)}>
				Logout
            </Button>
			<h2>Polls Unanswered</h2>
			{ Object.keys(this.props.questions).length - Object.keys(this.props.authedUserProfile.answers).length }
			<h3>
			{ Object.keys(this.props.authedUserProfile.answers) }
			</h3>
			<h2>Polls Answered</h2>
			{ Object.keys(this.props.authedUserProfile.answers).length }
       		<List>
       		</List>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {  
  
  return {
    authedUser: authedUser,
    authedUserProfile: Object.values(users).filter((user) => { return user.id === authedUser }).pop(),
    questions: Object.values(questions),
  }
}

export default connect(mapStateToProps)(Homepage)