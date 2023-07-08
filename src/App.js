import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Achievements from "./pages/Achievements";
import ProjectsFull from "./pages/ProjectsFull";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects-full" element={<ProjectsFull />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
