import React from 'react';
import Navigation from './components/navigation';
import SidebarNav from './components/sidebarnav';
import './App.css';

function App() {
  const headerBrand = 'Steam Stats App';
  const themes = ['Light', 'Dark']
  let state = {
      theme: 'dark'
  }

  return (
      <div>
          <Navigation headerBrand={headerBrand} themes={themes} defaultTheme={state.theme}/>
          <SidebarNav/>
      </div>
  );
}

export default App;
