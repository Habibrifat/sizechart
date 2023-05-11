import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SizeChart from "./sizeChart";
import Plans from "./plans";
import Help from "./help";
import Dashboard from "./Dashboard";
import NewSizeChart from "./NewSizeChart";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}

          {/* <Route path="/" element={<Layout />} /> */}

          {/* <Route path="/" element={<SizeChart />} /> */}

          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/size-chart" element={<SizeChart />} />
            <Route path="/new-size-chart" element={<NewSizeChart />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/help" element={<Help />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
