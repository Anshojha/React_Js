import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import "./App.css";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm  heading = "Enter the text here to analyze"/>
      </div>
    </>
  );
}

export default App;
