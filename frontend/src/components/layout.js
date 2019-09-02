import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './header';
import HomePage from './home';
import MapPage from './map/mapPage';
import AuthPage from './auth';
import UserContext from '../context'

class Layout extends React.Component {
  state = { user: null }
  onAuthChange = (user) => {
    console.log('authed', user)
    this.setState({ user })
  }
  render() {
    return (
      <UserContext.Provider value={{
        ...this.state,
        onAuthChange: this.onAuthChange
      }}>
        <Router>
          <Header user={this.state.user}/>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/login" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
        </Router>
      </UserContext.Provider>
    )
  }
}

export default Layout;