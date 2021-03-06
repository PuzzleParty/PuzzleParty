import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllUsers} from '../store/user'

export class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    let allUsers = this.props.users
    return (
      <div>
        {allUsers &&
          allUsers.map(user => (
            <div key={user.id}>
              <Link to={`/user/${user.id}`}>
                <h3>{user.email}</h3>
              </Link>
              <h3>{user.id}</h3>
            </div>
          ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.user.allUsers
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
