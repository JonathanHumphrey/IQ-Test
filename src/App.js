import React, { useState, useEffect } from 'react'
import ModalContainer from './Modal'
import './App.css';

function App() {
  // creates a slice of state in order to create a toggle button to toggle the state 
  const [show, setShow] = useState(false);
  //toggles the visibility of the modal
  const toggleShow = () => {
    setShow(!show)
  }

  // creates a slice of state in order to set the value of the starting IQ value
  const [iqScore, setIqScore] = useState(110);
  // sets the iqScore based on this very complex alorithm
  const iqCalculator = () => {
    setIqScore(iqScore => iqScore - 1)
    console.log(iqScore)
  }

  // creates a slice of state in order to show the score
  const [showScore, setShowScore] = useState(false);
  
  // Activates when the close button within the Modal is clicked
  // setShow is set to true as well as setShowScore in order to close out of the modal and display the user's score
  const testOver = () => {
    setShow(!show)
    setShowScore(true)
  }
  
  //creates a timer that fires the function iqCalculator every .500 (500 milli) seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {           
        iqCalculator()
      }, 500);
      return () => clearTimeout(timer);
    }
  });

  const styles = {
    fontSize: 40,
    backgroundColor: 'grey'
  }
  if (iqScore > 100) {
    styles.color =  '#09f530'
  }
  else if (iqScore < 99) {
    styles.color = 'yellow'
  }
  else if (iqScore < 85) {
    styles.color = 'orange'
  }
  else if (iqScore < 70) {
    styles.color = 'red'
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
          </button>
          <ModalContainer
            show={show}
            toggleShow={toggleShow}
            testOver={testOver}
          />
          {!show && showScore ?
            <div className="score">
              <p style={styles}>Your IQ is: {iqScore}</p>
            </div> : ""}
        </div>
      </div>
    </div>
  );
}
export default App;
