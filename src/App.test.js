import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('path to recipe exists in the app', () => {
  const { getByText } = render(<App />);
  const elementTest = getByText(/Delicious recipes/);
  expect(elementTest).toBeInTheDocument();
});

import RecipeContainer from './containers/RecipeCointainer';
test('path to category exists in the app', () => {
  const { getByText } = render(<RecipeContainer />);
  const elementTest = getByText('Loading...');
  expect(elementTest).toBeInTheDocument();
});