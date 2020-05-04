import React from 'react';
import './App.css';
import MainHeader from './components/AppHeader';
import CategoryContainer from './containers/CategoryContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader/>
      </header>
        <CategoryContainer/>
    </div>
  );
}

export default App;
