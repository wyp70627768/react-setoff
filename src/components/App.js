import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './common/Header';
import CoursesPage from './course/CoursesPage';
import HomePage from './home/HomePage';
import About from './about/About';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/coursespage' component={CoursesPage} />
      </div>
    </Router>
    );
  }
}

export default App;
