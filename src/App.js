import React from 'react';
import {Navigation} from './components/navigation'
import './App.css';

function App() {
  const headerBrand = 'Steam Stats App';
  const themes = ['Light', 'Dark']
  let state = {
      theme: 'dark'
  }

  return (
      <Navigation headerBrand={headerBrand} themes={themes} defaultTheme={state.theme}/>
  );
}

export default App;
