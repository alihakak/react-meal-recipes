import React from 'react';
import './App.css';
import MainHeader from './components/AppHeader';
import CategoryContainer from './containers/CategoryContainer';
import { BrowserRouter as PageRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader />
      </header>
      <PageRouter>
        <Switch>
          <Route
            path="/category/:id">
            <div>Category Meals</div>
          </Route>
          <Route path="/">
            <CategoryContainer />
          </Route>

        </Switch>
      </PageRouter>

    </div>
  );
}

export default App;
