import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About"

import "./App.css";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <TextForm  heading = "Enter the text here to analyze"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
