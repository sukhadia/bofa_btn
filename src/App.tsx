import React from 'react';
import logo from './logo.svg';
import './App.css';
import BofaButton, { BUTTON_TYPE } from './BofaButton';

function App() {
  const {secondary} = BUTTON_TYPE;
  return (
    <div className="App">
      <div className="container">
        <div className="sample">
          <div className="sample-label">Primary:</div>
          <BofaButton label="Delete" faIconClasses="fa fa-trash" />
        </div>
        <div className="sample">
          <div className="sample-label">Secondary:</div>
          <BofaButton label="Delete" faIconClasses="fa fa-trash" type={secondary} />
        </div>
        <div className="sample">
          <div className="sample-label">Disabled:</div>
          <BofaButton label="Delete" faIconClasses="fa fa-trash" isDisabled={true}/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
