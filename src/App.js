import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import UserList from './components/UserList'
import Homepage from './components/Homepage'


class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
     
      <div>
        {this.props.authenticated === false
          ? <UserList />
          : <Homepage />
      	}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authenticated: authedUser !== null,
    user: authedUser
  }
}

export default connect(mapStateToProps)(App);
