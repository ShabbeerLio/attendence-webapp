import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Pnav from "./Components/Navbar/Pnav";
import Leave from "./Pages/Leave.js/Leave";
import Attendence from "./Pages/Attendence/Attendence";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leave" exact element={<Leave />} />
          <Route path="/attendence" exact element={<Attendence />} />
        </Routes>
      </div>
      <Pnav />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
