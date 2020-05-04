import React from 'react';
import './App.css';
import MainHeader from './components/AppHeader';
import CategoryContainer from './containers/CategoryContainer';
import MealContainer from './containers/MealCointainer';
import { BrowserRouter as PageRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader />
      </header>
      <PageRouter>
        <Switch>
        <Route path="/meal/recipe">
            <div>instructions come here...</div>
          </Route>
          <Route
            path="/category/:id"
            render={props => {
              return (
                <MealContainer
                  categoryName={props.match.params.id}
                  categoryDesc={props.location.state.description}
                />
              );
            }}>
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
