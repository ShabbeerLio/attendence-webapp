import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Pnav from "./Components/Navbar/Pnav";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Pnav />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
