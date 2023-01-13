//import logo from './logo.svg';
// import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been disabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="AboutTextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <Textform heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
