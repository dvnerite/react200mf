import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearch from './Containers/MovieSearch';
import Movies from './Containers/Movies';
import MovieDetails from './Containers/MovieDetails';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='nav'>
            <h1>Movie Finder</h1>
          </nav>
          <Route path='/' exact component={ MovieSearch} />
          <Route path='/movieInfo/:value' component={ Movies } />
          <Route path='/movie/:id' component={ MovieDetails } />;
        </div>
      </Router>
    )
  }
}