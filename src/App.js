import React from 'react';
import Navigation from './components/navigation';
import SidebarNav from './components/sidebarnav';
import './App.css';

function App() {
  const headerBrand = 'Steam Stats App';
  const themes = ['Light', 'Dark']
  let state = {
      theme: 'dark',
      sidebarTheme: 'secondary',
      sidebarVisible: false
  }

  return (
      <div>
          <Navigation headerBrand={headerBrand} themes={themes} defaultTheme={state.theme}/>
          <span id = 'sidebar-container'>
            <SidebarNav outerContainerId={'sidebar-container'} theme={state.sidebarTheme}/>
          </span>
      </div>
  );
}

export default App;
