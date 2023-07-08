import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Achievements from "./pages/Achievements";
import ProjectsFull from "./pages/ProjectsFull";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects-full" element={<ProjectsFull />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
