import React from 'react';
import Header from './containers/Header';
import Profile from './containers/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-header">
          {/* header */}
          <Header />
        </div>

        <div className="app-main-content">
          <Profile/>
        </div>
      </div>
    </div>
  );
}

export default App;
