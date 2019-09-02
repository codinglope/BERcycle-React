import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = ({ user }) => (
  <nav className="nav-bar">
    <div className="container-fluid">
      <ul className="nav-list">
        <li className="li"><Link to="/">Home</Link></li>
        <li className="li"><Link to="/map">Edu.Points</Link></li>
      </ul>
    </div>
    <div className="container-fluid2">
      <ul className="nav-list2">
        {user ?
          <li className="right">
            <a href="/logout" onClick={() => {
              
            }}>Logout</a>
          </li> :
          <Fragment>
            <li className="right"><Link to="/signup">SignUp</Link></li>
            <li className="right"><Link to="/login">Login</Link></li>
          </Fragment>
        }
      </ul>
    </div >
  </nav >
)

export default Header;