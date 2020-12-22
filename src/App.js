import React, { useState, useEffect } from 'react'
import ModalContainer from './Modal'
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [iqScore, setIqScore] = useState(110);
  const [showScore, setShowScore] = useState(false);
  
  const toggleShow = () => {
    setShow(!show)
  }
  const testOver = () => {
    setShow(!show)
    setShowScore(true)
  }
  const iqCalculator = () => {
    setIqScore(iqScore => iqScore - 1)
    console.log(iqScore)
  }

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {           
        iqCalculator()
      }, 500);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="App">
      <div className="container">
        <div className="main-content">
          <h1>
            Perfect IQ Test
          </h1>
          <button variant="primary" onClick={toggleShow}>
            Start The Test!
          </button>
          <ModalContainer
            show={show}
            toggleShow={toggleShow}
            testOver={testOver}
          />
          {!show && showScore ?
            <div class="score">
              <p>Your Score is: {iqScore}</p>
            </div>
            : ""}
        </div>
      </div>
    </div>
  );
}
export default App;
