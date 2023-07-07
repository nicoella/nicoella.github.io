import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectsFull from "./pages/ProjectsFull";
import Layout from "./pages/Layout";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectsFull" element={<ProjectsFull />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
