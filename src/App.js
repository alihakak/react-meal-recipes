import React from 'react';
import Header from './components/Header';
import HeaderBackground from './themes/assets/header-1.jpg'
import CategoryContainer from './containers/CategoryContainer';
import MealContainer from './containers/MealCointainer';
import { BrowserRouter as PageRouter, Switch, Route } from "react-router-dom";
import { appStrings } from './resources/strings';
import RecipeContainer from './containers/RecipeCointainer';

function App() {
  return (
    <div className="App">
        <Header title={appStrings.headerText} imgSrc={HeaderBackground} />
      <PageRouter>
        <Switch>
        <Route
            path="/meal/recipe/:id"
            render={props => {
              return (
                <RecipeContainer
                  mealId={props.match.params.id}
                  categoryDesc={props.location.state ? props.location.state.description : '' }
                />
              );
            }}>
          </Route>
          <Route
            path="/meals/:id"
            render={props => {
              return (
                <MealContainer
                  categoryName={props.match.params.id}
                  categoryDesc={props.location.state ? props.location.state.description : '' }
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
