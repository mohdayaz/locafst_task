import React, { Component } from 'react';
import Main from './Components/Main';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"
import LogInSignUP from './Components/LogInSignUP';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                      <Route path="/">
                        <div className="dashboard">
                          <ErrorBoundary>
                            <MemoryRouter
                              initialEntries={["/"]}
                              initialIndex={1}
                            >
                              <Main />
                            </MemoryRouter>
                          </ErrorBoundary>
                        </div>
                      </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;