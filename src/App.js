//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutTextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
