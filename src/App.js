import React from 'react';
import './css/header.css';
import Home from './comp/Home';
import HeaderZone from './comp/Header';
import { TodoAppProvider } from './context/cp';
function App() {
  return (
    <React.Fragment>
      <TodoAppProvider>
        <HeaderZone></HeaderZone>
     <Home />
      </TodoAppProvider>
      
    </React.Fragment>
  );
}

export default App;
