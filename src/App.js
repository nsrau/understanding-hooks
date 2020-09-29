import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import List from './components/memo/List';
import Counter from './components/useMemo/Counter';
import './App.css';

export default function App() {
  return (
    <HashRouter basename='/'>
      <Router>
        <>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/memo">memo</Link>
              </li>
              <li>
                <Link to="/useMemo">useMemo</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/memo">
                <List />
              </Route>
              <Route path="/useMemo">
                <Counter />
              </Route>
              <Route path="/">
                <p>use react profiler</p>
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </HashRouter>
  );
}
