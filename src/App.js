import React, { useState } from 'react'
import Modal from './Modal'
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="main-content">
          <h1>
            Perfect IQ Test
          </h1>
          <button variant="primary" onClick={toggleShow}>
            Start The Test!
            {console.log("clicked")}
          </button>
          {show ? <Modal toggleShow={toggleShow} /> : "" }
          
        </div>
      </div>
    </div>
  );
}
export default App;
