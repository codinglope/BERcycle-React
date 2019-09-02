import React, { Fragment } from 'react';
import axios from 'axios';
import UserContext from '../../context'


export class Auth extends React.Component {

  state = {
    user: {
      name: '',
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ 
      user: {
        ...this.state.user,
        [name]: value
      } 
     })
  }


  doAuth = (e) => {
    e.preventDefault()
    const isSignup = window.location.pathname.includes('signup')
    const path = isSignup ? 'register' : 'login'
    axios.post(`/api/${path}`, this.state.user).then(response => {
      localStorage.setItem('token', response.data.token)
      this.props.history.push('/map')
    }).catch(err => {
      this.setState({ errorMessage: err.response.data.message })
    })
  }

  render() {
    const isSignup = window.location.pathname.includes('signup')
    const { errorMessage, user } = this.state

    return (
      <UserContext.Consumer>
        {({_, setUser }) => (
          <form id="form" action="/signup" method="POST" className="access">
            {isSignup &&
              <Fragment>
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" onChange={this.handleChange} value={user.name}/>
              </Fragment>
            }

            <label htmlFor="username">Username</label><br />
            <input type="text" name="username" onChange={this.handleChange} value={user.username}/>

            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" onChange={this.handleChange} value={user.password}/>

            {errorMessage && <div className="error-message text-danger">{errorMessage}</div>}

            <div className="signupbutton">
              <button type="submit" className="btn btn-dark" onClick={this.doAuth}>
                { isSignup ? 'Sign Up' : 'Login' }
              </button>
            </div>
          </form>
        )}
      </UserContext.Consumer>
    )
  }
}

export default Auth