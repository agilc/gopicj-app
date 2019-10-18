import React, { useState } from 'react';
import Header from 'containers/Header';
import Profile from 'containers/Profile';
import './App.css';

function App() {
  const [editMode, updateEditMode] = useState(false);
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-header">
          <Header
            editMode = { editMode }
            updateEditMode = { updateEditMode }
          />
        </div>

        <div className="app-main-content">
          <Profile
            editMode = { editMode }
            updateEditMode = { updateEditMode }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
