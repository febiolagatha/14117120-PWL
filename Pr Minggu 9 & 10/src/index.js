import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './blog.js';
import Propil from './Profile.js';
import Baca from './Baca.js';
import * as serviceWorker from './serviceWorker';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
        <div>
        <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
        </ul>
        <Route path="/" component={App} />
        <Route exact path="/profile" component={Propil} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Baca} />
        </div>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
