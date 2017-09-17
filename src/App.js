import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexPageContainer from './containers/IndexPageContainer.js';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
            {/* <Route exact path="/" component={IndexPageContainer} /> */}
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
