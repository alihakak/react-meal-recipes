import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderBackground from './themes/assets/header-1.jpg'
import CategoryContainer from './containers/CategoryContainer';
import MealContainer from './containers/MealCointainer';
import { BrowserRouter as PageRouter, Switch, Route } from "react-router-dom";
import { appStrings } from './resources/strings';

function App() {
  return (
    <div className="App">
        <Header title={appStrings.headerText} imgSrc={HeaderBackground} />
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
