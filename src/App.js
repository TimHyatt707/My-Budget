import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import muiTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import IndexPageContainer from "./redux/containers/IndexPageContainer.js";
import BudgetPageContainer from "./redux/containers/BudgetPageContainer.js";
import TransactionPageContainer from "./redux/containers/TransactionPageContainer.js";
import SignupPageContainer from "./redux/containers/SignupPageContainer.js";
import LoginPageContainer from "./redux/containers/LoginPageContainer.js";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div className="App">
          <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" component={IndexPageContainer} />
                <Route exact path="/Budget" component={BudgetPageContainer} />
                <Route
                  exact
                  path="/Transactions"
                  component={TransactionPageContainer}
                />
                <Route exact path="/Signup" component={SignupPageContainer} />
                <Route exact path="/Login" component={LoginPageContainer} />
              </Switch>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}
