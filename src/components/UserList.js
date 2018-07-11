import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class UserList extends Component {
  handleUserSelect = (e, id) => {
    const { dispatch } = this.props
    e.preventDefault()
	dispatch(setAuthedUser(id))
  }

  render() {
    return (
    	<div>
       		<List>
        	{this.props.userIds.map((id) => (
          		<ListItem key={id}>
					<Avatar>{id.substr(0,1)}</Avatar>
          	  		<ListItemText primary={id} />
              			<Button variant="contained" color="primary" onClick={(e) => this.handleUserSelect(e, id)}>
							Login
              			</Button>
     			</ListItem>
          	))}
       		</List>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(UserList)