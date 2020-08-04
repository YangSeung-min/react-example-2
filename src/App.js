import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profiles from './pages/Profiles'  
import Hooks from './pages/Hooks'

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
          <li>
            <Link to="/profiles">프로필 목록</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/profiles/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/hooks" component={Hooks} />
      </div>
      <p>{process.env.REACT_APP_DB_HOST}</p>
    </div>
  );
}

export default App;
