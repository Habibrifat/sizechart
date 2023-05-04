import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SizeChart from "./sizeChart";
import Plans from "./plans";
import Help from "./help";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SizeChart />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
