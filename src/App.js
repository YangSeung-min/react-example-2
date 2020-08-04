import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile'  

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles/:username" component={Profile} />
      </div>
      <p>{process.env.REACT_APP_DB_HOST}</p>
    </div>
  );
}

export default App;
