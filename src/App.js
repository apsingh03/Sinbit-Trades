import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Demo from "./pages/Demo";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
